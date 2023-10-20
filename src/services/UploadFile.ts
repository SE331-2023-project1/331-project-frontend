import type { AxiosResponse  } from 'axios'
import axios from "axios";
const apiClient = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        Accept: 'application/json',
        'Content-Type': "multipart/form-data"
    }
})
export default{
    uploadFile(files: FormData): Promise<AxiosResponse<string[]>>{
        return apiClient.post<string[]>('/uploadAnnouncement',files)
    },
}