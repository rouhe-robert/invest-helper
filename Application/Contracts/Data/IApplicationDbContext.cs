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

        DbSet<Dwelling> Dwellings { get; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
