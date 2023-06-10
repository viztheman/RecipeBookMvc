using Microsoft.EntityFrameworkCore;
using RecipeBookMvc.Models;

namespace RecipeBookMvc.Data
{
    public class RecipeBookContext : DbContext
    {
        public RecipeBookContext(DbContextOptions<RecipeBookContext> options)
            : base(options)
        { }

        public virtual DbSet<Recipe> Recipes { get; set; }
    }
}
