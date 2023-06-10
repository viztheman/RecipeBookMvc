using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecipeBookMvc.Data;
using RecipeBookMvc.Models;

namespace RecipeBookMvc.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RecipesController : ControllerBase
{
    private readonly ILogger<RecipesController> _logger;
    private readonly RecipeBookContext _context;

    public RecipesController(ILogger<RecipesController> logger, RecipeBookContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet]
    public async Task<IEnumerable<Recipe>> Get()
    {
        return await _context.Recipes.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(long id)
    {
        var recipe = await _context.Recipes.FindAsync(id);
        if (recipe == null)
        {
            return NotFound();
        }

        return Ok(await _context.Recipes.FindAsync(id));
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] Recipe recipe)
    {
        await _context.Recipes.AddAsync(recipe);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetById), new { recipe.id }, recipe);
    }

    [HttpPatch("{id}")]
    public async Task<IActionResult> Patch(long id, [FromBody] Recipe value)
    {
        var recipe = await _context.Recipes.FirstOrDefaultAsync(x => x.id == id);
        if (recipe == null)
        {
            return NotFound();
        }

        _context.Entry(recipe).CurrentValues.SetValues(value);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetById), new { recipe.id }, recipe);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(long id)
    {
        var recipe = await _context.Recipes.FindAsync(id);
        if (recipe == null)
        {
            return NotFound();
        }

        _context.Recipes.Remove(recipe);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}
