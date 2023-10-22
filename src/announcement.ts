export interface AnnouncementInfo {
    id:number
    files: string;
    content: string;
    advisor: number;
}

export interface AdvisorFilesDTO{
    id: number
    academicPosition: string
    name: string
    surname: string
    images: string[]
    department: string
}