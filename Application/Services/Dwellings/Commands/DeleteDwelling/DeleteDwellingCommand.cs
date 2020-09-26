using System.Threading;
using System.Threading.Tasks;
using IH.Application.Contracts.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace IH.Application.Services.Dwellings.Commands.DeleteDwelling
{
    public class DeleteDwellingCommand : IRequest<bool>
    {
        public DeleteDwellingCommand(int id) {
            this.Id = id;
        }

        public int Id { get; }

        public class RequestHandler : IRequestHandler<DeleteDwellingCommand, bool>
        {
            private readonly IApplicationDbContext context;

            public RequestHandler(IApplicationDbContext context)
            {
                this.context = context;
            }

            public async Task<bool> Handle(DeleteDwellingCommand request, CancellationToken cancellationToken)
            {
                var dwelling = await this.context.Dwellings.FirstOrDefaultAsync(
                    dwelling => dwelling.Id == request.Id).ConfigureAwait(false);

                if (dwelling == null)
                {
                    return false;
                }

                this.context.Dwellings.Remove(dwelling);

                await this.context.SaveChangesAsync(cancellationToken).ConfigureAwait(false);

                return true;
            }
        }
    }
}
