using System.Threading;
using System.Threading.Tasks;
using IH.Application.Contracts.Data;
using IH.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace IH.Application.Services.Dwellings.Commands.CreateDwelling
{
    public class CreateDwellingCommand : IRequest<bool>
    {
        public CreateDwellingCommand(DwellingDto dwelling) {
            this.Dwelling = dwelling;
        }

        public DwellingDto Dwelling { get; }

        public class RequestHandler : IRequestHandler<CreateDwellingCommand, bool>
        {
            private readonly IApplicationDbContext context;

            public RequestHandler(IApplicationDbContext context)
            {
                this.context = context;
            }

            public async Task<bool> Handle(CreateDwellingCommand request, CancellationToken cancellationToken)
            {
                var district = await this.context.Districts.FirstOrDefaultAsync(
                    district => district.Id == request.Dwelling.District).ConfigureAwait(false);

                if (district == null)
                {
                    return false;
                }

                this.context.Dwellings.Add(
                    new Dwelling
                    {
                        Address = request.Dwelling.Address,
                        District = district,
                        DwellingRenovationDebt = request.Dwelling.DwellingRenovationDebt,
                        HasElevator = request.Dwelling.HasElevator,
                        HasOwnLandLot = request.Dwelling.HasOwnLandLot,
                        HasSauna = request.Dwelling.HasSauna,
                        HousingCooperativeRenovationDebt = request.Dwelling.HousingCooperativeRenovationDebt,
                        MaintenanceCharge = request.Dwelling.MaintenanceCharge,
                        Price = request.Dwelling.Price,
                        RentEuros = request.Dwelling.RentEuros,
                        RoomsCount = request.Dwelling.RoomsCount,
                        SquareMeters = request.Dwelling.SquareMeters,
                        Type = request.Dwelling.Type,
                    });

                await this.context.SaveChangesAsync(cancellationToken).ConfigureAwait(false);

                return true;
            }
        }
    }
}
