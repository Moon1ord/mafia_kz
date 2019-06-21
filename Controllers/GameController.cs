using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using mafia_kz.Models;
using System.Runtime.Serialization.Json;

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
            return Json(new {test = "test123" }) ;
        }

        [HttpPost]
        public async Task<IActionResult> PostGame()
        {
            Game test = new Game();
            test.Game_Date = System.DateTime.Now;
        }
    }
}