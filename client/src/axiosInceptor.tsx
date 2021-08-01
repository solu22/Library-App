import axios from 'axios'

const axiosInceptor = axios.create({})

axiosInceptor.interceptors.request.use((request) => {
    const token = localStorage.getItem('token')
    if (token) {
      request.headers = { Authorization: `Bearer ${token}` }
    }
    return request
})

export default axiosInceptor