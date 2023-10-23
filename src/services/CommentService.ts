import apiClient from './AxiosClient'
import type { AxiosResponse  } from 'axios'
import type { CommentInfo } from '@/comment'

import type { CommentInfoDTO } from '@/comment'
export default {
    getComment(id: number): Promise<AxiosResponse<CommentInfoDTO[]>> {
      return apiClient.get<CommentInfoDTO[]>('/comments/' + id.toString());
    },
    saveComment(id:number,comment: CommentInfo): Promise<AxiosResponse<CommentInfo>> {
      return apiClient.post<CommentInfo>('/addComment/' +id.toString(), comment);
    },
    editComment(comment: CommentInfo): Promise<AxiosResponse<CommentInfo>> {
      return apiClient.post<CommentInfo>('/editComment', comment);
  },
     
}