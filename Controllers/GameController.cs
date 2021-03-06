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
    public class GameController : Controller
    {
        private readonly MafiaDbContext _context;

        public GameController(MafiaDbContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public async Task<IList<Game>> GetGames()
        {
            return await _context._games.ToListAsync();
        }

        [HttpPost]
        public async Task<IList<Game>> PostGame([FromForm] Game game)
        {
            _context._games.Add(game);
            await _context.SaveChangesAsync();
            return _context._games.ToList();
        }

        [HttpGet]
        [Route("[action]/{game_id}", Name = "game_id")]
        public async Task<Game> GetGame([FromRoute] int game_id)
        {
            var SelectedGame = await _context._games.FirstAsync(g => g.Id == game_id);
            return SelectedGame;
        }

        [HttpPost]
        [Route("[action]")]
        public async Task<IList<Game>> DeleteGame([FromForm] int id)
        {
            Game selected_game = _context._games.FirstOrDefault(g => g.Id == id);
            _context._games.Remove(selected_game);
            await _context.SaveChangesAsync();
            return _context._games.ToList();
        }
    }
}