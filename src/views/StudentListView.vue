<template>
<div class="flex items-center justify-between">
    <h1 class="text-4xl mt-5 font-bold text-gray-700">Student List</h1>
    <div class="search flex items-center ml-5 mt-6 mr-12">
        <form class=""> 
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input v-model="keyword" @input="updateKeyword" type="search" id="default-search" class="block w-96 p-2 pl-12 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
                <!-- <BaseInput v-model="keyword" type="text" label="Search..." @input="updateKeyword" /> -->
            </div>
        </form>
        <div class="flex items-center ml-5 justify-end">
            <p class="text-gray-700 text-sm mr-2 font-semibold">Yanwarut</p>
            <img src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg" alt="Profile Image" class="w-10 h-10 rounded-full">
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
  <div class="flex justify-center mt-5">
    <div class="flex items-center">
        <RouterLink
            :to="{ name: 'home', query: { page: page - 1 } }"
            rel="prev"
            v-if="page != 1"
            id="page-prev"
            class="join-item items-center btn bg-slate-300 hover:bg-gray-500"
        >
            «
        </RouterLink>

        <div class="join-item btn bg-gray-300 text-center hover:bg-gray-500">Page {{ page }} of {{ totalPages }}</div>
        <div class="mr-10">
        <RouterLink
            :to="{ name: 'home', query: { page: page + 1 } }"
            rel="next"
            v-if="hasNextPage"
            id="page-next"
            class="join-item text-center btn bg-slate-300 hover:bg-gray-500"
        >
            »
        </RouterLink>
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
import AdvisorService from "@/services/AdvisorService"
import type { StudentAdvisor } from '@/student'
import BaseInput from '@/components/BaseInput.vue'

const router = useRouter()
const students: Ref<Array<StudentInfo>> = ref([])
const totalStudent = ref<number>(0)
const keyword = ref('')
const totalPages = computed(() => Math.ceil(totalStudent.value / 3))
const props = defineProps({
  
  page: {
    type: Number,
    required: true
  },
  modelValue: {
        type: [String, Number],
        require: false,
        default: ''
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
  // StudentService.getStudent(3, toPage)
  //   .then((response: AxiosResponse<StudentInfo[]>) => {
  //     students.value = response.data
  //     totalStudent.value = response.headers['x-total-count']
  //     next()
  //   })
  //   .catch(() => {
  //     next({ name: 'NetworkError' })
  //   })  
  let queryFunction
  if (keyword.value === '') {
    queryFunction = StudentService.getStudent(3, toPage)
  } else {
    queryFunction = StudentService.getStudentsByKeyword(keyword.value, 3, toPage)
  }
  queryFunction
    .then((response: AxiosResponse<StudentInfo[]>) => {
      students.value = response.data
      console.log('events', students.value)
      totalStudent.value = response.headers['x-total-count']
      console.log('totalEvent', totalStudent.value)
    })
    .catch(() => {
      router.push({ name: 'NetworkError' })
    })
})
const emit = defineEmits(['update:modelValue'])
function updateKeyword(event: Event) {
  const target = event.target as HTMLInputElement;
  const value = target.value;
  emit('update:modelValue', value); // Emitting the value for parent components to use

  let queryFunction;
  if (value === '') {
    queryFunction = StudentService.getStudent(3, 1);
  } else {
    queryFunction = StudentService.getStudentsByKeyword(value, 3, 1);
  }

  queryFunction
    .then((response: AxiosResponse<StudentInfo[]>) => {
      students.value = response.data;
      console.log('student', students.value);
      totalStudent.value = response.headers['x-total-count'];
      console.log('totalStudent', totalStudent.value);
    })
    .catch(() => {
      router.push({ name: 'NetworkError' });
    });
}
</script>
<style scoped></style>
