import { createRouter, createWebHistory } from 'vue-router'
import StudentListView from '@/views/StudentListView.vue'
import StudentDetailView from '@/views/StudentDetailView.vue'
import AdvisorListView from '@/views/AdvisorListView.vue'
import AdvisorDetailView from '@/views/AdvisorDetailView.vue'
import SignUpView from '@/views/SignUpView.vue'
import SignInView from '@/views/SignInView.vue'

import StudentFormView from '@/views/StudentFormView.vue'
import AdvisorFormView from '@/views/AdvisorFormView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: StudentListView,
      props: (route) => ({
        page: parseInt((route.query?.page as string) || "1"),
      }),
    },
    {
      path: "/advisor",
      name: "advisor",
      component: AdvisorListView,
      props: (route) => ({
        page: parseInt((route.query?.page as string) || "1"),
      }),    
    },
    
    {
      path: "/student/:id",
      name: "student-detail",
      component: StudentDetailView,
      props: true,
    },


    {
      path: "/Signup",
      name: "Signup",
      component: SignUpView,
      props: true,
    },
    {
      path: "/Signin",
      name: "Signin",
      component: SignInView,
      props: true,
    },

    
  {
    path: "/advisor/:id",
    name: "advisor-detail",
    component: AdvisorDetailView,
    props: true,
  },

    {
      path: "/add-student",
      name: "add-student",
      component: StudentFormView,
      props: true,
    },
  {
      path: "/add-advisor",
      name: "add-advisor",
      component: AdvisorFormView,
      props: true,
  },
    

  ]

  
})

export default router
