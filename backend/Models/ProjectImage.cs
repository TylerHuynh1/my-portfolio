using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PortfolioAPI.Models
{
    public class ProjectImage
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string ImagePath { get; set; } = string.Empty;

        public string? Description { get; set; }

        public int Order { get; set; } = 0;

        // Foreign key
        [ForeignKey("Project")]
        public int ProjectId { get; set; }

        // Navigation property
        public Project Project { get; set; } = null!;
    }
}
