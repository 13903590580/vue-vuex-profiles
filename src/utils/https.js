import axios from 'axios'

// Add a request interceptor
axios.interceptors.request.use((config) => {
    if (localStorage.getItem("jwtToken")) {
        config.headers.Authorization = localStorage.jwtToken;
    }
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use((response) => {

    return response;
}, (error) => {
    const { status } = error.response;
    if (status == 401) {
        // 提示
        alert("token值失效,请重新登录");
        localStorage.removeItem("jwtToken");
        this.$router.push("/login");
    }
    return Promise.reject(error);
});

export default axios;
