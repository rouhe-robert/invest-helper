using System.Threading.Tasks;
using IH.Application.Services.Dwellings.Queries.GetDwelling;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace IH.Controllers
{
    [ApiController]
    public class GetDwellingController : ControllerBase
    {
        private readonly IMediator mediator;

        public GetDwellingController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpGet("/api/dwellings/{id}")]
        public async Task<object> Get(int id)
        {
            return new OkObjectResult(
                await this.mediator.Send(
                    new GetDwellingQuery(id)).ConfigureAwait(false));
        }
    }
}
