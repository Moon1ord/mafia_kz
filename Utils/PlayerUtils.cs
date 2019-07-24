using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace mafia_kz.Models {
    public class PlayerUtils{
        public static async Task<IList<Player>> getPlayersInGameAsync(int game_id, MafiaDbContext context){
            var playersInGame = await context._players.Join(context._playerGames
            .Where(g => g.GameId == game_id),
            p => p.Player_id,
            pg => pg.PlayerId,
            (p, pg) => p).ToListAsync();

            return playersInGame;
        }
    }
}