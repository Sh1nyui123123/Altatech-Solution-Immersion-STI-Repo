using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HelloWorld.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HelloWorldler : ControllerBase
    {
        [HttpPost]
        public ActionResult<string> Post()
        {
            return "Hello World";
        }
    }
}
