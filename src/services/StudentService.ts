import apiClient from './AxiosClient'
import type { AxiosResponse  } from 'axios'
import type { StudentInfo } from '@/student'

export default{
    getStudent(perPage: number, page: number): Promise<AxiosResponse<StudentInfo[]>>{
        return apiClient.get<StudentInfo[]>('students?_limit=' + perPage + '&_page=' + page)
    },
    getStudentByID(id: number): Promise<AxiosResponse<StudentInfo>>{
        return apiClient.get<StudentInfo>('students/' +id.toString())
    }
//     ,
//     saveAdvisor(event: AdvisorInfo): Promise<AxiosResponse<AdvisorInfo>>{
//         return apiClient.post<AdvisorInfo>('/events',event)
//     },
//     getAdvisorsByKeyword(keyword: string, perPage: number, page: number): Promise<AxiosResponse<AdvisorInfo[]>> {
//     return apiClient.get<AdvisorInfo[]>('/events?title=' + keyword + '&_limit=' + perPage + '&_page=' + page)
// }
}