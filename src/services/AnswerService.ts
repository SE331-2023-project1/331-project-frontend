import apiClient from './AxiosClient'
import type { AxiosResponse } from 'axios'
import type { CommentInfoDTO } from '@/comment'
import type { AnswerInfo } from '@/answer'
import type {AnswerReturnList,AnswerInfoDTO} from '@/answer'

export default {
  getAnswer(id: number): Promise<AxiosResponse<AnswerInfo[]>> {
    return apiClient.get<AnswerInfo[]>('/answer' + id.toString())
  },
  saveAnswer(answer: AnswerInfo): Promise<AxiosResponse<AnswerInfo>> {
    return apiClient.post<AnswerInfo>('/answer', answer)
  },
  getAllAnswerByCommentId(comment: CommentInfoDTO): Promise<AxiosResponse<AnswerReturnList[]>> {
    return apiClient.post<AnswerReturnList[]>('/answers', comment)
  },
  editAnswer(answer: AnswerInfoDTO): Promise<AxiosResponse<AnswerInfoDTO>> {
    return apiClient.post<AnswerInfoDTO>('/editAnswer', answer)
  }
}
