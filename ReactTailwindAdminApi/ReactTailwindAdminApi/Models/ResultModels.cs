namespace ReactTailwindAdminApi.Models
{
    public class ResultModels
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
        public object Data { get; set; }

        public ResultModels()
        {
            IsSuccess = false;
            Message = "";
            Data= new object();
        }
    }
}
