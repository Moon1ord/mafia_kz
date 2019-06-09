using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using mafia_kz.Models;

namespace mafia_kz.Controllers
{
    /// <summary>
    /// Контроллер для работы с игроками
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class PlayersController : ControllerBase
    {
        private readonly MafiaDbContext _context;

        public PlayersController(MafiaDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Получить список игроков
        /// </summary>
        /// <returns>список игроков</returns>
        // GET: api/Players
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Player>>> Get_players()
        {
            return await _context.Players.ToListAsync();
        }

        /// <summary>
        /// Получить информацию об игроке по его id
        /// </summary>
        /// <param name="id">идентификатор игрока</param>
        /// <returns>информация об игроке</returns>
        // GET: api/Players/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Player>> GetPlayer(int id)
        {
            var player = await _context.Players.FindAsync(id);

            if (player == null)
            {
                return NotFound();
            }

            return player;
        }

        /// <summary>
        /// Обновить информацию об игроке
        /// </summary>
        /// <param name="id">идентификатор игрока</param>
        /// <param name="player">информация об игроке</param>
        /// <returns>статус</returns>
        // PUT: api/Players/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPlayer(int id, Player player)
        {
            if (id != player.Player_id)
            {
                return BadRequest();
            }

            _context.Entry(player).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlayerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        /// <summary>
        /// Создать нового игрока
        /// </summary>
        /// <param name="player">информация об игроке</param>
        /// <returns>информация о созданном игроке</returns>
        // POST: api/Players
        [HttpPost]
        public async Task<ActionResult<Player>> PostPlayer(Player player)
        {
            _context.Players.Add(player);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPlayer", new { id = player.Player_id }, player);
        }

        /// <summary>
        /// Удалить игрока
        /// </summary>
        /// <param name="id">идентификатор игрока</param>
        /// <returns>информация об игроке</returns>
        // DELETE: api/Players/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Player>> DeletePlayer(int id)
        {
            var player = await _context.Players.FindAsync(id);
            if (player == null)
            {
                return NotFound();
            }

            _context.Players.Remove(player);
            await _context.SaveChangesAsync();

            return player;
        }

        /// <summary>
        /// Проверить существование игрока с заданным id
        /// </summary>
        /// <param name="id">идентификатор игрока</param>
        /// <returns>признак того, что игрок существует</returns>
        private bool PlayerExists(int id)
        {
            return _context.Players.Any(e => e.Player_id == id);
        }
    }
}
