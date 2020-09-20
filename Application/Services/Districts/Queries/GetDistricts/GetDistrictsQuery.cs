
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using IH.Application.Contracts.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace IH.Application.Services.Districts.Queries.GetDistricts
{
    public class GetDistrictsQuery : IRequest<IList<DistrictDto>>
    {
        public class RequestHandler : IRequestHandler<GetDistrictsQuery, IList<DistrictDto>>
        {
            private readonly IApplicationDbContext context;

            public RequestHandler(IApplicationDbContext context)
            {
                this.context = context;
            }

            public async Task<IList<DistrictDto>> Handle(GetDistrictsQuery request, CancellationToken cancellationToken)
            {
                return await this.context.Districts.Select(district => new DistrictDto
                    {
                        City = new CityDto
                        {
                            Id = district.City.Id,
                            Name = district.City.Name,
                        },
                        Id = district.Id,
                        Name = district.Name,
                    }).ToListAsync();
            }
        }
    }
}
