using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        public CityController()
        {
                
        }

        public IEnumerable<string> GetStrings()
        {
            return new[] { "KLD", "GKP", "BST" };
        }
    }
}
