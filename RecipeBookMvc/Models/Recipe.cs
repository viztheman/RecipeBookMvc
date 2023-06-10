namespace RecipeBookMvc.Models
{
    public class Recipe
    {
        public long id { get; set; }
        public string? title { get; set; }
        public string? ingredients { get; set; }
        public string? steps { get; set; }
        public string? notes { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime updatedAt { get; set; }
    }
}
