# Portfolio Project Manager - C# CRUD System

## Overview
This is a full-stack CRUD application built with:
- **Backend**: C# ASP.NET Core 10 + Entity Framework Core + SQLite
- **Frontend**: React + Tailwind CSS
- **Authentication**: JWT Bearer Token

The system allows you to manage your portfolio projects dynamically through an admin dashboard instead of hardcoding them.

## Features
- Full CRUD operations (Create, Read, Update, Delete) for projects
- JWT authentication with login system
- Dynamic project loading from database
- Support for featured projects with multiple images
- Tech stack management
- Admin dashboard for easy project management

## Default Credentials
**Username**: `admin`
**Password**: `admin123`

**IMPORTANT**: Change these credentials after first login!

## Running the Application

### 1. Start the Backend API
```bash
cd backend
dotnet run --urls="http://localhost:5000"
```

The API will be available at: `http://localhost:5000`

### 2. Start the React Frontend
In a new terminal:
```bash
npm start
```

The frontend will be available at: `http://localhost:3000`

## How to Use

### Accessing the Admin Panel
1. Navigate to your portfolio's Projects page
2. Click the floating **Edit** button (pencil icon) in the top-right corner
3. Login with the credentials above
4. You'll be redirected to the Admin Dashboard

### Managing Projects

#### View All Projects
- Projects are displayed on the Admin Dashboard
- Featured projects show with a blue badge

#### Add New Project
1. Click "Add New Project"
2. Fill in the form:
   - **Title**: Project name (required)
   - **Description**: Project description (required)
   - **GitHub Link**: URL to repository
   - **Main Image Path**: Path to main image (e.g., `/project.png`)
   - **Tech Stack**: Comma-separated technologies (e.g., `React, Node.js, MongoDB`)
   - **Additional Images**: One per line in format: `path|description`
     ```
     /image1.png|Login screen
     /image2.png|Dashboard view
     ```
   - **Featured Project**: Check to make it the featured project
3. Click "Create Project"

#### Edit Project
1. Click "Edit" on any project card
2. Modify the fields
3. Click "Update Project"

#### Delete Project
1. Click "Delete" on any project card
2. Confirm deletion

## API Endpoints

### Public Endpoints (No Authentication Required)
- `GET /api/projects` - Get all projects
- `GET /api/projects/{id}` - Get single project

### Protected Endpoints (Requires JWT Token)
- `POST /api/projects` - Create new project
- `PUT /api/projects/{id}` - Update project
- `DELETE /api/projects/{id}` - Delete project

### Authentication Endpoints
- `POST /api/auth/login` - Login and get JWT token
- `POST /api/auth/register` - Register new admin user

## Database Schema

### Projects Table
- Id, Title, Description, Link, MainImage, IsFeatured, Order, CreatedAt, UpdatedAt

### ProjectImages Table (One-to-Many with Projects)
- Id, ProjectId, ImagePath, Description, Order

### TechStacks Table (One-to-Many with Projects)
- Id, ProjectId, Name

### Users Table
- Id, Username, PasswordHash, CreatedAt

## Tech Stack Details

### Backend
- **ASP.NET Core 10**: Web API framework
- **Entity Framework Core**: ORM for database operations
- **SQLite**: Lightweight database
- **BCrypt**: Password hashing
- **JWT**: Token-based authentication

### Frontend
- **React 19**: UI framework
- **React Router**: Client-side routing
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations

## File Structure
```
backend/
├── Controllers/
│   ├── AuthController.cs        # Login/Register
│   └── ProjectsController.cs    # CRUD operations
├── Models/
│   ├── User.cs
│   ├── Project.cs
│   ├── ProjectImage.cs
│   └── TechStack.cs
├── Data/
│   ├── ApplicationDbContext.cs  # EF Core DbContext
│   └── DbSeeder.cs             # Database seeding
├── Services/
│   ├── IAuthService.cs
│   └── AuthService.cs          # JWT token generation
├── DTOs/                        # Data Transfer Objects
└── Program.cs                   # App configuration

src/
├── pages/
│   ├── Login.js                 # Login page
│   ├── Admin.js                 # Admin dashboard
│   └── Projects.js              # Public projects page
└── App.js                       # React Router setup
```

## Notes
- The database file (`portfolio.db`) is created automatically in the `backend/` directory
- Images should be placed in the React `public/` folder
- The Edit button is visible on the Projects page but only you know the credentials
- API runs on port 5000, React on port 3000
- CORS is configured to allow requests from `localhost:3000` and `localhost:3001`

## Security Recommendations
1. Change default admin credentials immediately
2. Use environment variables for JWT secret key in production
3. Enable HTTPS in production
4. Add rate limiting to prevent brute force attacks
5. Consider adding CAPTCHA to login page

## Troubleshooting

### Backend won't start
- Ensure .NET 10 SDK is installed: `dotnet --version`
- Check if port 5000 is already in use

### Frontend can't connect to API
- Verify backend is running at `http://localhost:5000`
- Check browser console for CORS errors
- Ensure the API URL in React components matches the backend URL

### Database errors
- Delete `portfolio.db` file and restart backend to recreate database
- Database will be automatically seeded with default data

## Learning Outcomes
This project demonstrates:
- RESTful API design
- Entity Framework Core relationships (One-to-Many)
- JWT authentication implementation
- Protected routes in React
- Database seeding
- Full CRUD operations
- Integration between C# backend and React frontend

Perfect for showcasing to employers as it demonstrates both backend and frontend skills!
