import apiClient from './AxiosClient'
import type { AxiosResponse  } from 'axios'
import type { AnnouncementInfo } from '@/announcement'

export default {
    getAnnouncement(id:number): Promise<AxiosResponse<AnnouncementInfo[]>>{
        return apiClient.get<AnnouncementInfo[]>('/announcement/'+ id.toString());
    },
    announcement(id:number,file:AnnouncementInfo): Promise<AxiosResponse<AnnouncementInfo>> {
        return apiClient.post<AnnouncementInfo>('/createAnnouncement/' +id.toString() , file);
    },
}


