export interface StudentInfo{
    id: number
    studentID: string
    name: string
    surname: string
    images: string[]
    advisor: StudentAdvisor
    course: StudentCourse[]
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
    id: number
    name: string
    courseID: string
}