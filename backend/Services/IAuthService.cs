using PortfolioAPI.DTOs;

namespace PortfolioAPI.Services
{
    public interface IAuthService
    {
        Task<AuthResponse?> Login(LoginRequest request);
        Task<bool> Register(RegisterRequest request);
        string GenerateJwtToken(int userId, string username);
    }
}
