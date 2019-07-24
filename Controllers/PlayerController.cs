using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using mafia_kz.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace mafia_kz.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayerController : Controller
    {
        private readonly MafiaDbContext _context;

        public PlayerController(MafiaDbContext context)
        {
            _context = context;

        }

        [HttpPost]
        public async Task<IList<Player>> PostPlayer([FromForm] String login)
        {
            Player player = new Player();
            player.Login = login;
            _context._players.Add(player);
            await _context.SaveChangesAsync();
            return _context._players.ToList();
        }

        [HttpPost]
        [Route("[action]")]
        public async Task<IList<Player>> DeletePlayer([FromForm] string login)
        {
            Player selected_player = _context._players.First(p => p.Login == login);
            _context._players.Remove(selected_player);
            await _context.SaveChangesAsync();
            return _context._players.ToList();
        }

        [HttpGet]
        public async Task<IList<Player>> GetPlayers()
        {
            return await _context._players.ToListAsync();   
        }

        [HttpPost]
        [Route("[action]")]
        public async Task<IList<Player>> PutPlayerInTheGame([FromForm] int game_id, [FromForm] string login)
        {
            var player = _context._players.Single(p => p.Login == login);
            var game = _context._games.Include(g => g.PlayerGames).Single(g => g.Id == game_id);

            game.PlayerGames.Add(new PlayerGame {
                Game = game,
                Player = player
            });

            await _context.SaveChangesAsync();

            var playersInGame = await PlayerUtils.getPlayersInGameAsync(game_id, _context);

             return playersInGame;

        }
    }
}
