using System.Threading.Tasks;
using IH.Application.Services.Dwellings.Queries.GetDwellings;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace IH.Controllers
{
    [ApiController]
    public class GetDwellingssController : ControllerBase
    {
        private readonly IMediator mediator;

        public GetDwellingssController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpGet("/api/dwellings")]
        public async Task<object> Get()
        {
            return new OkObjectResult(
                await this.mediator.Send(
                    new GetDwellingsQuery()).ConfigureAwait(false));
        }
    }
}
