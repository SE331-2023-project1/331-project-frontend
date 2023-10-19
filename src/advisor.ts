export interface AdvisorInfo{
    id: number
    academicPosition: string
    name: string
    surname: string
    images: string[]
    department: string
    advisees : AdviseesStudent[]
}
export interface AdviseesStudent{
    id: number
    studentID: string
    name: string
    surname: string
    images: string[]
}
