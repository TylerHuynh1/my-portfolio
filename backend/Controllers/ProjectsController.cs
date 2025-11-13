using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PortfolioAPI.Data;
using PortfolioAPI.DTOs;
using PortfolioAPI.Models;

namespace PortfolioAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProjectsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/projects - Public endpoint
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProjectDto>>> GetProjects()
        {
            var projects = await _context.Projects
                .Include(p => p.Images.OrderBy(i => i.Order))
                .Include(p => p.TechStacks)
                .OrderBy(p => p.Order)
                .Select(p => new ProjectDto
                {
                    Id = p.Id,
                    Title = p.Title,
                    Description = p.Description,
                    Link = p.Link,
                    MainImage = p.MainImage,
                    IsFeatured = p.IsFeatured,
                    Order = p.Order,
                    Images = p.Images.Select(i => new ProjectImageDto
                    {
                        Id = i.Id,
                        ImagePath = i.ImagePath,
                        Description = i.Description,
                        Order = i.Order
                    }).ToList(),
                    TechStack = p.TechStacks.Select(t => t.Name).ToList()
                })
                .ToListAsync();

            return Ok(projects);
        }

        // GET: api/projects/{id} - Public endpoint
        [HttpGet("{id}")]
        public async Task<ActionResult<ProjectDto>> GetProject(int id)
        {
            var project = await _context.Projects
                .Include(p => p.Images.OrderBy(i => i.Order))
                .Include(p => p.TechStacks)
                .FirstOrDefaultAsync(p => p.Id == id);

            if (project == null)
                return NotFound();

            var projectDto = new ProjectDto
            {
                Id = project.Id,
                Title = project.Title,
                Description = project.Description,
                Link = project.Link,
                MainImage = project.MainImage,
                IsFeatured = project.IsFeatured,
                Order = project.Order,
                Images = project.Images.Select(i => new ProjectImageDto
                {
                    Id = i.Id,
                    ImagePath = i.ImagePath,
                    Description = i.Description,
                    Order = i.Order
                }).ToList(),
                TechStack = project.TechStacks.Select(t => t.Name).ToList()
            };

            return Ok(projectDto);
        }

        // POST: api/projects - Protected endpoint (requires authentication)
        [HttpPost]
        [Authorize]
        public async Task<ActionResult<ProjectDto>> CreateProject([FromBody] CreateProjectRequest request)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var project = new Project
            {
                Title = request.Title,
                Description = request.Description,
                Link = request.Link,
                MainImage = request.MainImage,
                IsFeatured = request.IsFeatured,
                Order = await _context.Projects.CountAsync(),
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            // Add tech stacks
            foreach (var tech in request.TechStack)
            {
                project.TechStacks.Add(new TechStack { Name = tech });
            }

            // Add images
            foreach (var img in request.Images)
            {
                project.Images.Add(new ProjectImage
                {
                    ImagePath = img.ImagePath,
                    Description = img.Description,
                    Order = img.Order
                });
            }

            _context.Projects.Add(project);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProject), new { id = project.Id }, await GetProjectDto(project.Id));
        }

        // PUT: api/projects/{id} - Protected endpoint (requires authentication)
        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> UpdateProject(int id, [FromBody] CreateProjectRequest request)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var project = await _context.Projects
                .Include(p => p.Images)
                .Include(p => p.TechStacks)
                .FirstOrDefaultAsync(p => p.Id == id);

            if (project == null)
                return NotFound();

            // Update basic properties
            project.Title = request.Title;
            project.Description = request.Description;
            project.Link = request.Link;
            project.MainImage = request.MainImage;
            project.IsFeatured = request.IsFeatured;
            project.UpdatedAt = DateTime.UtcNow;

            // Update tech stacks (remove old, add new)
            _context.TechStacks.RemoveRange(project.TechStacks);
            foreach (var tech in request.TechStack)
            {
                project.TechStacks.Add(new TechStack { Name = tech, ProjectId = project.Id });
            }

            // Update images (remove old, add new)
            _context.ProjectImages.RemoveRange(project.Images);
            foreach (var img in request.Images)
            {
                project.Images.Add(new ProjectImage
                {
                    ImagePath = img.ImagePath,
                    Description = img.Description,
                    Order = img.Order,
                    ProjectId = project.Id
                });
            }

            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/projects/{id} - Protected endpoint (requires authentication)
        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteProject(int id)
        {
            var project = await _context.Projects.FindAsync(id);

            if (project == null)
                return NotFound();

            _context.Projects.Remove(project);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private async Task<ProjectDto?> GetProjectDto(int id)
        {
            var project = await _context.Projects
                .Include(p => p.Images.OrderBy(i => i.Order))
                .Include(p => p.TechStacks)
                .FirstOrDefaultAsync(p => p.Id == id);

            if (project == null)
                return null;

            return new ProjectDto
            {
                Id = project.Id,
                Title = project.Title,
                Description = project.Description,
                Link = project.Link,
                MainImage = project.MainImage,
                IsFeatured = project.IsFeatured,
                Order = project.Order,
                Images = project.Images.Select(i => new ProjectImageDto
                {
                    Id = i.Id,
                    ImagePath = i.ImagePath,
                    Description = i.Description,
                    Order = i.Order
                }).ToList(),
                TechStack = project.TechStacks.Select(t => t.Name).ToList()
            };
        }
    }
}
