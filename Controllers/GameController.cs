using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using System.Threading.Tasks;
namespace DefaultNamespace
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetGame()
        {
            return Ok();
        }
    }
}