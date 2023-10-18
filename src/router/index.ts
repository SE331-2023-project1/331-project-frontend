import { createRouter, createWebHistory } from 'vue-router'
import StudentListView from '@/views/StudentListView.vue'
import StudentDetailView from '@/views/StudentDetailView.vue'
import StudentFormView from '@/views/StudentFormView.vue'

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
      path: "/student/:id",
      name: "student-detail",
      component: StudentDetailView,
      props: true,
    },
    {
      path: "/add-student",
      name: "add-student",
      component: StudentFormView,
      props: true,
    },
  ]
})

export default router
