using Microsoft.EntityFrameworkCore;

namespace mafia_kz.Models
{
    public class MafiaDbContext : DbContext
    {
        public MafiaDbContext(DbContextOptions<MafiaDbContext> options) : base(options)
        {
            
        }

        public DbSet<Models.Player> _players { get; set; }
        public DbSet<Models.Game> _games { get; set; }  
        public DbSet<Models.PlayerGame> _playerGames { get; set; }      
        public MafiaDbContext()
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Player>().HasAlternateKey(p => p.Login);
            modelBuilder.Entity<PlayerGame>().HasKey(pg => new {pg.PlayerId, pg.GameId});    
        }
    }
}