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
            Console.WriteLine("Saved");
            return _context._games.ToList();
        }

        [HttpGet]
        [Route("[action]")]
        public async Task<Game> GetGame([FromForm] int id)
        {
            Game game = new Game();
            game = await _context._games.FirstOrDefaultAsync(g => g.Id == id);
            return game;
        }
    }
}