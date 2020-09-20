
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using IH.Application.Contracts.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace IH.Application.Services.Dwellings.Queries.GetDwellings
{
    public class GetDwellingsQuery : IRequest<IList<DwellingDto>>
    {
        public class RequestHandler : IRequestHandler<GetDwellingsQuery, IList<DwellingDto>>
        {
            private readonly IApplicationDbContext context;

            public RequestHandler(IApplicationDbContext context)
            {
                this.context = context;
            }

            public async Task<IList<DwellingDto>> Handle(GetDwellingsQuery request, CancellationToken cancellationToken)
            {
                return await this.context.Dwellings.Select(dwelling => new DwellingDto
                    {
                        Address = dwelling.Address,
                        Id = dwelling.Id,
                    }).ToListAsync().ConfigureAwait(false);
            }
        }
    }
}
