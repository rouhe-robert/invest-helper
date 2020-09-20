using IH.Application.Contracts.Data;
using IH.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace IH.Infrastructure.Data
{
    public class ApplicationDbContext : DbContext, IApplicationDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
        {
        }

        public virtual DbSet<City> Cities { get; set; }

        public virtual DbSet<District> Districts { get; set; }
    }
}
