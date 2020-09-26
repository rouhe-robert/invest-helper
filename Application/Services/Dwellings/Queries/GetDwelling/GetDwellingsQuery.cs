
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using IH.Application.Contracts.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace IH.Application.Services.Dwellings.Queries.GetDwelling
{
    public class GetDwellingQuery : IRequest<DwellingDto>
    {
        public GetDwellingQuery(int id)
        {
            this.Id = id;
        }

        public int Id { get; }

        public class RequestHandler : IRequestHandler<GetDwellingQuery, DwellingDto>
        {
            private readonly IApplicationDbContext context;

            public RequestHandler(IApplicationDbContext context)
            {
                this.context = context;
            }

            public async Task<DwellingDto> Handle(GetDwellingQuery request, CancellationToken cancellationToken)
            {
                return await this.context.Dwellings
                    .Where(dwelling => dwelling.Id == request.Id)
                    .Select(dwelling => new DwellingDto
                        {
                            Address = dwelling.Address,
                            Archived = dwelling.Archived,
                            BuiltYear = dwelling.BuiltYear,
                            District = new DistrictDto
                            {
                                City = new CityDto
                                {
                                    Name = dwelling.District.City.Name,
                                },
                                Name = dwelling.District.Name,
                            },
                            DwellingRenovationDebt = dwelling.DwellingRenovationDebt,
                            FinancingDebt = dwelling.FinancingDebt,
                            FinancingDebtCharge = dwelling.FinancingDebtCharge,
                            Floor = dwelling.Floor,
                            HasElevator = dwelling.HasElevator,
                            HasOwnLandLot = dwelling.HasOwnLandLot,
                            HasSauna = dwelling.HasSauna,
                            HousingCooperativeRenovationDebt = dwelling.HousingCooperativeRenovationDebt,
                            Id = dwelling.Id,
                            MaintenanceCharge = dwelling.MaintenanceCharge,
                            Price = dwelling.Price,
                            RentEuros = dwelling.RentEuros,
                            RoomsCount = dwelling.RoomsCount,
                            SquareMeters = dwelling.SquareMeters,
                            Type = dwelling.Type,
                            WebLink = dwelling.WebLink
                        }).FirstOrDefaultAsync().ConfigureAwait(false);
            }
        }
    }
}
