using System.ComponentModel.DataAnnotations;

namespace PortfolioAPI.Models
{
    public class Project
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(200)]
        public string Title { get; set; } = string.Empty;

        [Required]
        public string Description { get; set; } = string.Empty;

        [MaxLength(500)]
        public string? Link { get; set; }

        public string? MainImage { get; set; }

        public bool IsFeatured { get; set; } = false;

        public int Order { get; set; } = 0;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

        // Navigation properties
        public ICollection<ProjectImage> Images { get; set; } = new List<ProjectImage>();
        public ICollection<TechStack> TechStacks { get; set; } = new List<TechStack>();
    }
}
