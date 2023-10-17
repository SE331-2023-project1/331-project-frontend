export interface CourseItem{
    id: number
    name: string
    courseID: string
    description: string 
    enrolledStudents : StudentEnroll[]  
}
export interface StudentEnroll{
    id: number
    studentID: string
    name: string
    surname: string
}