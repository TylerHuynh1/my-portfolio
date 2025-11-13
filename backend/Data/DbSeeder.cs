using PortfolioAPI.Models;

namespace PortfolioAPI.Data
{
    public class DbSeeder
    {
        public static async Task SeedData(ApplicationDbContext context)
        {
            // Seed admin user if no users exist
            if (!context.Users.Any())
            {
                var adminUser = new User
                {
                    Username = "admin",
                    PasswordHash = BCrypt.Net.BCrypt.HashPassword("admin123"), // Change this password!
                    CreatedAt = DateTime.UtcNow
                };
                context.Users.Add(adminUser);
                await context.SaveChangesAsync();
            }

            // Seed projects if none exist
            if (!context.Projects.Any())
            {
                var scholarKnights = new Project
                {
                    Title = "Scholar Knights",
                    Description = "A MERN stack web app that helps UCF students find and join study groups based on classes and interests.",
                    Link = "https://github.com/kalypso2/scholar-knights/tree/Live-Server",
                    MainImage = "/scholar-knights-home.png",
                    IsFeatured = true,
                    Order = 0,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow,
                    TechStacks = new List<TechStack>
                    {
                        new TechStack { Name = "MongoDB" },
                        new TechStack { Name = "Express" },
                        new TechStack { Name = "React" },
                        new TechStack { Name = "Node.js" }
                    },
                    Images = new List<ProjectImage>
                    {
                        new ProjectImage
                        {
                            ImagePath = "/scholar-knights-login.png",
                            Description = "Secure login screen with UCF email verification to ensure only registered students can access the platform.",
                            Order = 0
                        },
                        new ProjectImage
                        {
                            ImagePath = "/scholar-knights-signup.png",
                            Description = "User registration form where students can create an account using their full name, email, and password, followed by a verification step.",
                            Order = 1
                        },
                        new ProjectImage
                        {
                            ImagePath = "/scholar-knights-home.png",
                            Description = "Main landing dashboard after login, displaying quick navigation to join sessions, view profile, and explore courses.",
                            Order = 2
                        },
                        new ProjectImage
                        {
                            ImagePath = "/scholar-knights-courses.png",
                            Description = "Courses page allowing users to view, add, and manage the classes they're enrolled in. These courses are used to filter relevant study sessions.",
                            Order = 3
                        },
                        new ProjectImage
                        {
                            ImagePath = "/scholar-knights-find-session.png",
                            Description = "Search and filter screen where users can browse all available study sessions by course, tags, date, and mode (online/in-person).",
                            Order = 4
                        },
                        new ProjectImage
                        {
                            ImagePath = "/scholar-knights-joined.png",
                            Description = "Shows a personalized list of all study sessions the user has joined or requested to join, with options to view details or leave.",
                            Order = 5
                        },
                        new ProjectImage
                        {
                            ImagePath = "/scholar-knights-create-session.png",
                            Description = "Session creation form where users can specify a title, description, location, course, date/time, tags, and privacy level (public or private).",
                            Order = 6
                        },
                        new ProjectImage
                        {
                            ImagePath = "/scholar-knights-approve.png",
                            Description = "Management interface for session creators to review incoming join requests, approve or deny them, and monitor attendee lists.",
                            Order = 7
                        },
                        new ProjectImage
                        {
                            ImagePath = "/scholar-knights-profile.png",
                            Description = "User profile page that displays and allows editing of profile details such as name, username, bio, and enrolled courses.",
                            Order = 8
                        }
                    }
                };

                var portfolio = new Project
                {
                    Title = "Portfolio Website",
                    Description = "A responsive personal portfolio built with React and Tailwind.",
                    Link = "https://github.com/TylerHuynh1/my-portfolio",
                    MainImage = "/portfolio-home.png",
                    IsFeatured = false,
                    Order = 1,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow,
                    TechStacks = new List<TechStack>
                    {
                        new TechStack { Name = "React" },
                        new TechStack { Name = "Tailwind" }
                    },
                    Images = new List<ProjectImage>()
                };

                var contactCloud = new Project
                {
                    Title = "Contact Cloud",
                    Description = "A contact management app built with the LAMP stack (Linux, Apache, MySQL, PHP) supporting full CRUD operations.",
                    Link = "https://github.com/TylerHuynh1/Contact-Cloud",
                    MainImage = "/contact-cloud.png",
                    IsFeatured = false,
                    Order = 2,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow,
                    TechStacks = new List<TechStack>
                    {
                        new TechStack { Name = "HTML" },
                        new TechStack { Name = "CSS" },
                        new TechStack { Name = "JavaScript" },
                        new TechStack { Name = "Tailwind" },
                        new TechStack { Name = "PHP" },
                        new TechStack { Name = "MySQL" }
                    },
                    Images = new List<ProjectImage>()
                };

                context.Projects.AddRange(scholarKnights, portfolio, contactCloud);
                await context.SaveChangesAsync();
            }
        }
    }
}
