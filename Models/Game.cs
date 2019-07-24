using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace mafia_kz.Models
{
    public class Game
    {
        [DatabaseGenerated((DatabaseGeneratedOption.Identity))]
        public int Id { get; set; }
        public DateTime Game_Date { get; set; }

        public IList<PlayerGame> PlayerGames {get;set;}
    }
}