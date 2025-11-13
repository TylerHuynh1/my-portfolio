using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PortfolioAPI.Models
{
    public class TechStack
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; } = string.Empty;

        // Foreign key
        [ForeignKey("Project")]
        public int ProjectId { get; set; }

        // Navigation property
        public Project Project { get; set; } = null!;
    }
}
