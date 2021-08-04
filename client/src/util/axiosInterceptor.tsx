import axios from 'axios'

const axiosInterceptor = axios.create({})

axiosInterceptor.interceptors.request.use((request) => {
    const token = localStorage.getItem('token')
    if (token) {
      request.headers = { Authorization: `Bearer ${token}` }
    }
    return request
})

export default axiosInterceptor