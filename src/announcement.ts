export interface AnnouncementInfo {
    id:number
    files: string[];
    content: string;
    advisor: AdvisorFilesDTO;
}

export interface AdvisorFilesDTO{
    id: number
    academicPosition: string
    name: string
    surname: string
    images: string[]
    department: string
}
export interface FileURL{
    name:string
}