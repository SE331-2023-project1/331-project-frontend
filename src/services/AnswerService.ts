import apiClient from './AxiosClient'
import type { AxiosResponse  } from 'axios'
import type { AnswerInfo } from '@/answer'

export default {
    getAnswer(id: number): Promise<AxiosResponse<AnswerInfo[]>> {
      return apiClient.get<AnswerInfo[]>('/answer' + id.toString());
    },
    saveAnswer(id:number,answer: AnswerInfo): Promise<AxiosResponse<AnswerInfo>> {
      return apiClient.post<AnswerInfo>('/answer' +id.toString(), answer);
    },
     
}