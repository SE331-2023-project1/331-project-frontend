import apiClient from './AxiosClient'
import type { AxiosResponse  } from 'axios'
import type { AnnouncementInfo } from '@/announcement'

export default {
    getAnnouncementForAdvisor(id:number): Promise<AxiosResponse<AnnouncementInfo[]>>{
        return apiClient.get<AnnouncementInfo[]>('/advisorAnnouncement/'+ id.toString());
    },
    getAnnouncement(id:number): Promise<AxiosResponse<AnnouncementInfo[]>>{
        return apiClient.get<AnnouncementInfo[]>('/announcement/'+ id.toString());
    },
    announcement(id:number,file:AnnouncementInfo): Promise<AxiosResponse<AnnouncementInfo>> {
        return apiClient.post<AnnouncementInfo>('/createAnnouncement/' +id.toString() , file);
    },
    getfiles(id:number): Promise<AxiosResponse<AnnouncementInfo>> {
        return apiClient.get<AnnouncementInfo>('/announcement/'+ id.toString());
    },
    saveAnnouncement(id:number,file:AnnouncementInfo): Promise<AxiosResponse<AnnouncementInfo>>{
        return apiClient.post<AnnouncementInfo>('/createAnnouncement/'+id.toString() ,file);
    }
}


