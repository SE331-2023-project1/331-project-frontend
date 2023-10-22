export interface CommentInfo {
    id:number;
    commentContent: string;
    advisorId: number;
}
export interface CommentInfoDTO {
    id:number
    advisor:AdvisorCommentInfo;
    student: StudentCommentInfo;
    answer: [];
    commentContent: number;
    postedAt:string;
}
export interface AdvisorCommentInfo{
    id: number
    academicPosition: string
    name: string
    surname: string
    images: string[]
    department: string
}
export interface StudentCommentInfo{
    id: number
    studentID: string
    name: string
    surname: string
    department: string
    images: string[]
}
