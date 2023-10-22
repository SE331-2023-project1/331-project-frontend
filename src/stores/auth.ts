import { defineStore } from "pinia";
import axios from "axios";
import type { AxiosInstance } from "axios";
import type { StudentLogin } from "@/student";
// import type { advisorRegister } from '@/advisor'

const apiClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null as string | null,
        user: null as StudentLogin | null
        
    }),
    getters: {
        currentUserName(): string {
            return this.user?.name || ''
        },
        isAdmin(): boolean {
            return this.user?.roles.includes('ROLE_ADMIN') || false
        },
        isStudent() : boolean {
            return this.user?.roles.includes('ROLE_STUDENT') || false
        },
        isAdvisor() : boolean {
            return this.user?.roles.includes('ROLE_ADVISOR') || false
        },
        userImage(): string{
            return this.user?.images[0] || ''
        },
        getId():number{
            return this.user?.id || 0
        }
    },
    actions: {
        login(username: string, password: string) {
            return apiClient
            .post('/api/v1/auth/authenticate', {
            username: username,
            password: password
            })
        .then((response )=>{
            if(response.data.student != null){
            this.token = response.data.access_token
            this.user = response.data.student
            localStorage.setItem('access_token', this.token as string)
            console.log(response.data)
            localStorage.setItem('user', JSON.stringify(this.user))
            console.log(response.data.student)
            }else{
                this.token = response.data.access_token
                this.user = response.data.advisor
                localStorage.setItem('access_token', this.token as string)
                console.log(response.data)
                localStorage.setItem('user', JSON.stringify(this.user))
                console.log(response.data.advisor)
            }
            return response
        })
    },
    logout() {
        console.log('logout')
        this.token = null
        this.user = null
        localStorage.removeItem('access_token')
        localStorage.removeItem('user')
    },
    reload(token: string, user: StudentLogin) {
        this.token = token
        this.user = user 
    },
        register(username: string, firstname: string, lastname: string, email: string, password: string) {
            return apiClient
            .post('/api/v1/auth/register', {
            username: username,
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        })
    },
        advisorRegister(username: string, firstname: string, lastname: string, email: string, password: string) {
            return apiClient
            .post('/api/v1/auth/advisorRegister', {
            username: username,
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        })
    }
}
})

