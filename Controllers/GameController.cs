using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using mafia_kz.Models;
using System.Runtime.Serialization.Json;
using Microsoft.EntityFrameworkCore;

namespace DefaultNamespace
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
        public async Task<IActionResult> GetGame()
        {            
            return Ok() ;
        }

        [HttpPost]
        public async Task<IActionResult> PostGame()
        {
            Game test = new Game();
            test.Game_Date = System.DateTime.Now;
        }
    }
}