<template>
<div>
  <div class="flex items-center justify-between sm:py-3 z-auto mr-12 mb-8">
    <div class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 mt-6 mr-2 text-red-500">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>
    <h1 class="text-4xl mt-5 font-bold text-gray-700">Student List</h1>


</div>

    <div class="search flex items-center ml-5 mt-6 mr-10">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >Search</label
      >
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none ">
          <svg
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          v-model="keyword"
          @input="updateKeyword"
          type="search"
          id="default-search"
          class="block w-96 p-2 pl-12 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
        />
      </div>

        <!-- <div>
    <BaseInput v-model="keyword" label="Search..." @input="updateKeyword" />
  </div>      </div> -->
      <div class="flex items-center ml-12 justify-end">
        <p class="text-gray-700 text-sm mr-4 font-semibold">{{ authStore.currentUserName }}</p>

        <div class="relative">
          <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mt-2"
            :src="authStore.userImage"
            alt=""
          />
          <!-- <span
            class="top-0 left-7 absolute w-3.5 h-3.5 animate-ping bg-green-400 border-2 border-white dark:border-gray-800 rounded-full">
            
          </span> -->
          <span class="relative flex h-3 w-3 bottom-10 left-8 ">
      <span class="absolute w-full h-full bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      <span class="relative inline-flex animate-pulse rounded-full h-3 w-3 bg-green-400"></span>
      </span>
        </div>
      </div>
    </div>
  </div>
</div>


  <div class="ml-auto">
    <!-- <RouterLink
            :to="{ name: 'edit-student' }"
        type="button"
        class="text-white bg-gradient-to-r from-red-500 to-orange-500 hover:bg-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-10 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none mt-6"
      >
        + Add Student
        </RouterLink> -->
  </div>
  <div class="">
    <StudentCard v-for="student in students" :key="student.id" :student="student"></StudentCard>
  </div>
  <div class="flex justify-center">
    <div class="flex items-center">

  <div class="flex justify-center mt-5">
      <RouterLink
        :to="{ name: 'home', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        id="page-prev"
        class="join-item text-center rounded-bl-md rounded-tl-md px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400 text-white animate-fade-right
 "
      >
        « PREV
      </RouterLink>

      <div class="flex items-center mr-10 

">
        <RouterLink
          :to="{ name: 'home', query: { page: page + 1 } }"
          rel="next"
          v-if="hasNextPage"
          id="page-next"
          class=" join-item text-center rounded-br-md rounded-tr-md px-6 py-2 bg-gradient-to-r from-red-500 to-orange-500 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400 text-white animate-fade-left
"
        >
          NEXT »
        </RouterLink>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type StudentInfo } from '@/student'
import StudentService from '@/services/StudentService'
import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import type { AxiosResponse } from 'axios'
import { useRouter } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'
import NProgress from 'nprogress'
import StudentCard from '@/components/StudentCard.vue'
import AdvisorService from '@/services/AdvisorService'
import type { StudentAdvisor } from '@/student'
import BaseInput from '@/components/BaseInput.vue'
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore()
const router = useRouter()
const students: Ref<Array<StudentInfo>> = ref([])
const totalStudent = ref<number>(0)
const keyword = ref('')
const totalPages = computed(() => Math.ceil(totalStudent.value / 3))
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})
const hasNextPage = computed(() => {
  return props.page.valueOf() < totalPages.value
})
NProgress
StudentService.getStudent(3, props.page)
  .then((response: AxiosResponse<StudentInfo[]>) => {
    students.value = response.data
    console.log('hello')
    console.log(students.value)
    totalStudent.value = response.headers['x-total-count']
  })
  .catch(() => {
    router.push({ name: 'NetworkError' })
  })

const advisors = ref<StudentAdvisor[]>([])
AdvisorService.getAdvisors()
  .then((response) => {
    advisors.value = response.data
    console.log(advisors.value)
  })
  .catch(() => {
    router.push({ name: 'NetworkError' })
  })
  
console.log(advisors.value)
onBeforeRouteUpdate((to, from, next) => {
  const toPage = Number(to.query.page)
  StudentService.getStudent(3, toPage)
    .then((response: AxiosResponse<StudentInfo[]>) => {
      students.value = response.data
      totalStudent.value = response.headers['x-total-count']
      next()
    })
    .catch(() => {
      next({ name: 'NetworkError' })
    })
  let queryFunction
  if (keyword.value === null || keyword.value === '') {
    queryFunction = StudentService.getStudent(3, toPage)
  } else {
    queryFunction = StudentService.getStudentsByKeyword(keyword.value, 3, toPage)
  }
  queryFunction
    .then((response: AxiosResponse<StudentInfo[]>) => {
      students.value = response.data
      totalStudent.value = response.headers['x-total-count']
      next()
    })
    .catch(() => {
      next({ name: 'NetworkError' })
    })
})

function updateKeyword() {
  let queryFunction
  if (keyword.value === '') {
    queryFunction = StudentService.getStudent(3, 1)
  } else {
    queryFunction = StudentService.getStudentsByKeyword(keyword.value, 3, 1)
  }

  queryFunction
    .then((response: AxiosResponse<StudentInfo[]>) => {
      students.value = response.data
      totalStudent.value = parseInt(response.headers['x-total-count'])
    })
    .catch(() => {
      router.push({ name: 'NetworkError' })
    })
}
</script>
<style scoped></style>
