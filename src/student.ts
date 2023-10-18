export interface StudentInfo{
    id: number
    studentID: string
    name: string
    surname: string
    department: string
    images: string[]
    advisor: StudentAdvisor
    courses: StudentCourse[]
}
export interface StudentAdvisor{
    id: number
    academicPosition: string
    name: string
    surname: string
    images: string[]
    department: string
}
export interface StudentCourse{
    id : number
    name: string
    courseID: string
    description:string
}