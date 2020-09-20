using System.Threading;
using System.Threading.Tasks;
using IH.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace IH.Application.Contracts.Data
{
    public interface IApplicationDbContext
    {
        DbSet<City> Cities { get; }

        DbSet<District> Districts { get; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
