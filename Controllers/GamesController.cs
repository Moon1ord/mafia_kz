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
    /// Контроллер для работы с играми
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : ControllerBase
    {
        /// <summary>
        /// контекст базы данных
        /// </summary>
        private readonly MafiaDbContext _context;

        /// <summary>
        /// Конструктор
        /// </summary>
        /// <param name="context">контекст базы данных</param>
        public GamesController(MafiaDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Получить информацию об играх
        /// </summary>
        /// <returns></returns>
        // GET: api/Games
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Game>>> GetGame()
        {
            return await _context.Game.ToListAsync();
        }

        /// <summary>
        /// Получить информацию об игре
        /// </summary>
        /// <param name="id">идентификатор игры</param>
        /// <returns>информация об игре</returns>
        // GET: api/Games/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Game>> GetGame(int id)
        {
            var game = await _context.Game.FindAsync(id);

            if (game == null)
            {
                return NotFound();
            }

            return game;
        }

        /// <summary>
        /// ОБновить информацию об игре
        /// </summary>
        /// <param name="id">идентификатор игры</param>
        /// <param name="game">информация об игре</param>
        /// <returns>код возврата</returns>
        // PUT: api/Games/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGame(int id, Game game)
        {
            if (id != game.Id)
            {
                return BadRequest();
            }

            _context.Entry(game).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GameExists(id))
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
        /// Добавить информацию о новой игре
        /// </summary>
        /// <param name="game">информация об игре</param>
        /// <returns>информация об игре</returns>
        // POST: api/Games
        [HttpPost]
        public async Task<ActionResult<Game>> PostGame(Game game)
        {
            _context.Game.Add(game);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGame", new { id = game.Id }, game);
        }

        /// <summary>
        /// Удалить информацию об игре
        /// </summary>
        /// <param name="id">идентификатор игры</param>
        /// <returns>информация об игре</returns>
        // DELETE: api/Games/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Game>> DeleteGame(int id)
        {
            var game = await _context.Game.FindAsync(id);
            if (game == null)
            {
                return NotFound();
            }

            _context.Game.Remove(game);
            await _context.SaveChangesAsync();

            return game;
        }

        /// <summary>
        /// Проверить существование игры по идентификатору
        /// </summary>
        /// <param name="id">идентификатор</param>
        /// <returns>Признак того, что игра существует</returns>
        private bool GameExists(int id)
        {
            return _context.Game.Any(e => e.Id == id);
        }
    }
}
