import type { AxiosResponse  } from 'axios'
import type {FileURL} from '@/announcement'
import axios from "axios";
const apiClient = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        Accept: 'application/json',
        'Content-Type': "multipart/form-data"
    }
})
export default{
    uploadFile(files: FormData): Promise<AxiosResponse<FileURL>>{
        return apiClient.post<FileURL>('/uploadAnnouncement',files)
    },
}