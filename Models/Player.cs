using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace mafia_kz.Models
{
    public class Player
    {
        [Key]
        [DatabaseGenerated((DatabaseGeneratedOption.Identity))]
        public int Player_id { get; set; }
        
        [Required]
        public string Login { get; set; }

        public float Score { get; set; }
        
        public int Games_played { get; set; }
        public int Win_games { get; set; }
        public int Loose_games { get; set; }

        public bool isWinner { get; set; }
        public bool isAdmin { get; set; }

        public IList<PlayerGame> PlayerGames {get;set;}

    }
}