using System.Threading.Tasks;
using IH.Application.Services.Dwellings.Commands.DeleteDwelling;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace IH.Controllers
{
    [ApiController]
    public class DeleteDwellingController : ControllerBase
    {
        private readonly IMediator mediator;

        public DeleteDwellingController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpDelete("/api/dwellings/{id}")]
        public async Task<object> Delete(int id)
        {
            return new OkObjectResult(
                await this.mediator.Send(
                    new DeleteDwellingCommand(id)).ConfigureAwait(false));
        }
    }
}
