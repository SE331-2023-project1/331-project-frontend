import { createRouter, createWebHistory } from 'vue-router'
import StudentListView from '@/views/StudentListView.vue'
import StudentDetailView from '@/views/StudentDetailView.vue'
import AdvisorListView from '@/views/AdvisorListView.vue'

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
    }
  ]

  
})

export default router
