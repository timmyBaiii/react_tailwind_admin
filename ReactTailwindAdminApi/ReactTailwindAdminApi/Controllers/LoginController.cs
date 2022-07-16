using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.Net.Http;

using MySql.Data.MySqlClient;

using ReactTailwindAdminApi.Models;

namespace ReactTailwindAdminApi.Controllers
{
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILogger logger;

        public LoginController(ILogger<LoginController> _logger)
        {
            logger = _logger;
        }

        /// <summary>
        /// 登入
        /// </summary>
        /// <param name="body"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost]
        [Route("api/login/auth")]
        public IActionResult Login(LoginRequest body)
        {
            ResultModels result = new ResultModels();

            if (!ModelState.IsValid)
            {
                result.IsSuccess = false;
                result.Message = "faill";
                return StatusCode(StatusCodes.Status400BadRequest, result);
            }

            try
            {

            }
            catch (Exception ex)
            {
            }


            logger.LogInformation("login test");

            return StatusCode(200, result);
        }
    }
}
