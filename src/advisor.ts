export interface AdvisorInfo{
    id: number
    academicPosition: string
    name: string
    surname: string
    images: string[]
    file: string[]
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

export interface advisorRegister{
    username: string
    email: string
    firstname: string
    surname : string
    password : string
    roles: string[] 
}

export interface advisorLogin{
    username: string
    images: string[]
    roles: string[] 
}

