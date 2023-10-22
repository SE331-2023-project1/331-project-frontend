export interface AnswerInfo {
    id: number;
    content: string;
    comment: CommentInfoDTO

}
export interface AnswerInfoDTO {
    id: number;
    content: string;
}
export interface CommentInfoDTO{
    id:number
    answer: AnswerInfoDTO[];
    commentContent: string;
    postedAt:string;
    advisor:AdvisorAnswerInfo;
    student: StudentAnswerInfo;
}
export interface AdvisorAnswerInfo{
    id: number
    academicPosition: string
    name: string
    surname: string
    images: string[]
    department: string
}
export interface StudentAnswerInfo{
    id: number
    studentID: string
    name: string
    surname: string
    department: string
    images: string[]
}
export interface AnswerReturnList {
    id: number;
    content: string;
    comment: CommentInfoDTO
}


