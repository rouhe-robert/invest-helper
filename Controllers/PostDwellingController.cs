using System.Threading.Tasks;
using IH.Application.Services.Dwellings.Commands.CreateDwelling;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace IH.Controllers
{
    [ApiController]
    public class PostDwellingController : ControllerBase
    {
        private readonly IMediator mediator;

        public PostDwellingController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpPost("/api/dwellings")]
        public async Task<object> Get([FromBody] DwellingDto dwelling)
        {
            return new OkObjectResult(
                await this.mediator.Send(
                    new CreateDwellingCommand(dwelling)).ConfigureAwait(false));
        }
    }
}
