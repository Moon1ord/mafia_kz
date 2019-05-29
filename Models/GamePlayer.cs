namespace mafia_kz.Models
{
    public class GamePlayer
    {
        public int PlayerId { get; set; }
        public Player Player { get; set; }
        
        public int GameId { get; set; }
        public Game Game { get; set; }
    }
}