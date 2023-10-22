export interface AnswerInfo {
    id:number;
    content: string;
    comment: CommentInfoDTO;
}
export interface CommentInfoDTO{
    id:number
    answer: [];
    commentContent: number;
    postedAt:string;
}



