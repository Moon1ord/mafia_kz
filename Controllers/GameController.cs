using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using mafia_kz.Models;

namespace DefaultNamespace
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        private readonly MafiaDbContext _context;

        public GameController(MafiaDbContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public async Task<IActionResult> GetGame()
        {
            return Ok();
        }
    }
}