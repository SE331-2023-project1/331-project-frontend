import apiClient from './AxiosClient'
import type { AxiosResponse  } from 'axios'
import type { CommentInfo } from '@/comment'

export default {
    getComment(id: number): Promise<AxiosResponse<CommentInfo>> {
      return apiClient.get<CommentInfo>('/comments' + id.toString());
    },
    saveComment(id:number,comment: CommentInfo): Promise<AxiosResponse<CommentInfo>> {
      return apiClient.post<CommentInfo>('/addComment/' +id.toString(), comment);
    },
}