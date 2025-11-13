namespace PortfolioAPI.DTOs
{
    public class ProjectDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string? Link { get; set; }
        public string? MainImage { get; set; }
        public bool IsFeatured { get; set; }
        public int Order { get; set; }
        public List<ProjectImageDto> Images { get; set; } = new();
        public List<string> TechStack { get; set; } = new();
    }

    public class ProjectImageDto
    {
        public int Id { get; set; }
        public string ImagePath { get; set; } = string.Empty;
        public string? Description { get; set; }
        public int Order { get; set; }
    }

    public class CreateProjectRequest
    {
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string? Link { get; set; }
        public string? MainImage { get; set; }
        public bool IsFeatured { get; set; }
        public List<string> TechStack { get; set; } = new();
        public List<CreateProjectImageDto> Images { get; set; } = new();
    }

    public class CreateProjectImageDto
    {
        public string ImagePath { get; set; } = string.Empty;
        public string? Description { get; set; }
        public int Order { get; set; }
    }
}
