using Microsoft.EntityFrameworkCore;
using mafia_kz.Models;

namespace mafia_kz.Models
{
    public class MafiaDbContext : DbContext
    {
        public MafiaDbContext(DbContextOptions<MafiaDbContext> options) : base(options)
        {
            
        }

        private DbSet<Models.Player> _players;

        public DbSet<Models.Player> Players
        {
            get { return _players; }
            set
            {
                if (value != null)
                {
                    _players = value;
                }
            }
        }

        public MafiaDbContext()
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Player>().HasAlternateKey(p => p.Login);
            modelBuilder.Entity<GamePlayer>().HasKey(gp => new {PlayerId = gp.PlayerId, GmaeId = gp.GameId});
        }

        public DbSet<mafia_kz.Models.Game> Game { get; set; }
    }
}