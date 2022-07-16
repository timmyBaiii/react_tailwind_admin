import axios from 'axios';

const service = axios.create({
    baseURL: 'http://localhost:5021/',
    timeout: 5000
}); //將 axios 儲存至變數

service.interceptors.request.use(
    config => {
            if (config.method === 'post' || config.method === 'POST')
            {
                config.data = JSON.stringify(config.data);
            }

            if (config.method === 'patch' || config.method === 'PATCH')
            {
                config.data = qs.stringify(config.data);
            }
            
            // getToken() && (config.headers.Authorization = `Bearer ${getToken()}`);
        
        return config;
    },
    error => {
        console.log(error);
        return new Promise.reject(error);
    }
)

service.interceptors.response.use( //使用 axios 攔截器，攔截 response 回傳所有結果
    response => {
        return Promise.resolve(response); //回傳 response 資料
    },
    error => {
        console.log(error);
        return Promise.reject(error.response);   //回傳 serverErrorMessage 變數，最終錯誤訊息
});

export default service;
