using System.ComponentModel.DataAnnotations;

using MySql.Data.MySqlClient;

namespace ReactTailwindAdminApi.Models
{
    /// <summary>
    /// 登入模型
    /// </summary>
    public class LoginModels
    {
        private MySqlConnection conn;

        public LoginModels(MySqlConnection _conn)
        {
            conn = _conn;
        }
    }

    /// <summary>
    /// 登入接收
    /// </summary>
    public class LoginRequest
    {
        /// <summary>
        /// 帳號
        /// </summary>
        [Required(ErrorMessage = "帳號必須輸入")]
        public string Account { get; set; }

        /// <summary>
        /// 密碼
        /// </summary>
        [Required(ErrorMessage = "密碼必須輸入")]
        public string Password { get; set; }

        public LoginRequest()
        {
            Account = "";
            Password = "";
        }
    }
}
