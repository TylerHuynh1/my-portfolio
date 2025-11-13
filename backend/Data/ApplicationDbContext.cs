using Microsoft.EntityFrameworkCore;
using PortfolioAPI.Models;

namespace PortfolioAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<ProjectImage> ProjectImages { get; set; }
        public DbSet<TechStack> TechStacks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure Project-ProjectImage relationship
            modelBuilder.Entity<Project>()
                .HasMany(p => p.Images)
                .WithOne(i => i.Project)
                .HasForeignKey(i => i.ProjectId)
                .OnDelete(DeleteBehavior.Cascade);

            // Configure Project-TechStack relationship
            modelBuilder.Entity<Project>()
                .HasMany(p => p.TechStacks)
                .WithOne(t => t.Project)
                .HasForeignKey(t => t.ProjectId)
                .OnDelete(DeleteBehavior.Cascade);

            // Index for featured projects
            modelBuilder.Entity<Project>()
                .HasIndex(p => p.IsFeatured);

            // Index for project order
            modelBuilder.Entity<Project>()
                .HasIndex(p => p.Order);
        }
    }
}
