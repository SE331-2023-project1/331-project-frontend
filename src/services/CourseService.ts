import apiClient from './AxiosClient'
import type { AxiosResponse  } from 'axios'
import type { CourseItem } from '@/course'

export default{
    getCourse(perPage: number, page: number): Promise<AxiosResponse<CourseItem[]>>{
        return apiClient.get<CourseItem[]>('courses?_limit=' + perPage + '&_page=' + page)
    },
    getCourseByID(id: number): Promise<AxiosResponse<CourseItem>>{
        return apiClient.get<CourseItem>('courses/' +id.toString())
    }
//     ,
//     saveAdvisor(event: AdvisorInfo): Promise<AxiosResponse<AdvisorInfo>>{
//         return apiClient.post<AdvisorInfo>('/events',event)
//     },
//     getAdvisorsByKeyword(keyword: string, perPage: number, page: number): Promise<AxiosResponse<AdvisorInfo[]>> {
//     return apiClient.get<AdvisorInfo[]>('/events?title=' + keyword + '&_limit=' + perPage + '&_page=' + page)
// }
}