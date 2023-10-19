import axios from "axios";
import router from '@/router'
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
apiClient.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      if (401 === error.response.status) {
        router.push('/Signin')
        return Promise.resolve(error.response)
      } else {
        return Promise.reject(error)
      }
    }
  )
export default apiClient