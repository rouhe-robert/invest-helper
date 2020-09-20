using System.Threading.Tasks;
using IH.Application.Services.Districts.Queries.GetDistricts;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace IH.Controllers
{
    [ApiController]
    public class GetDistrictsController : ControllerBase
    {
        private readonly IMediator mediator;

        public GetDistrictsController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpGet("/api/districts")]
        public async Task<object> Get()
        {
            return new OkObjectResult(
                await this.mediator.Send(
                    new GetDistrictsQuery()).ConfigureAwait(false));
        }
    }
}
