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
        public async Task<IList<Player>> DeletePlayer([FromForm] String login)
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


    }
}
