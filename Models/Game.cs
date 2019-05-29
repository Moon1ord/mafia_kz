using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace mafia_kz.Models
{
    public class Game
    {
        [DatabaseGenerated((DatabaseGeneratedOption.Identity))]
        public int Id { get; set; }
        public DateTime Game_Date { get; set; }
        public IList<GamePlayer> GamePlayer { get; set; }
    }
}