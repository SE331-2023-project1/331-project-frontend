import apiClient from './AxiosClient'
import type { AxiosResponse  } from 'axios'
import type { AdvisorInfo } from '@/advisor'
import type {StudentAdvisor} from '@/student'

export default{
    getAdvisor(perPage: number, page: number): Promise<AxiosResponse<AdvisorInfo[]>>{
        return apiClient.get<AdvisorInfo[]>('advisors?_limit=' + perPage + '&_page=' + page)
    },
    getAdvisorByID(id: number): Promise<AxiosResponse<AdvisorInfo>>{
        return apiClient.get<AdvisorInfo>('advisors/' +id.toString())
    },
    saveAdvisor(advisor: AdvisorInfo): Promise<AxiosResponse<AdvisorInfo>>{
        return apiClient.post<AdvisorInfo>('/advisors',advisor)
    },

    getAdvisors(): Promise<AxiosResponse<AdvisorInfo[]>> {
        return apiClient.get<AdvisorInfo[]>('/advisors')
    },
    edit(id:number,advisor: AdvisorInfo): Promise<AxiosResponse<AdvisorInfo>> {
        return apiClient.post<AdvisorInfo>('/advisors/edit/' +id.toString(), advisor);
    },

//     ,
//     saveAdvisor(event: AdvisorInfo): Promise<AxiosResponse<AdvisorInfo>>{
//         return apiClient.post<AdvisorInfo>('/events',event)
//     },
//     getAdvisorsByKeyword(keyword: string, perPage: number, page: number): Promise<AxiosResponse<AdvisorInfo[]>> {
//     return apiClient.get<AdvisorInfo[]>('/events?title=' + keyword + '&_limit=' + perPage + '&_page=' + page)
// }
}