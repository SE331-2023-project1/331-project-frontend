<template>
<div class="flex items-center justify-between sm:py-3 z-auto mr-9">
  <div class="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mr-2 text-red-500 mt-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>


    <h1 class="text-4xl mt-5 font-bold text-gray-700">Student Detail</h1>
  </div>

  <div class="flex items-center mr-12 mt-6">
    <p class="text-gray-700 text-sm mr-4 font-semibold">{{ authStore.currentUserName }}</p>

    <div class="relative mr-1">
      <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mt-2" :src="authStore.userImage" alt="" />
      <span class="relative flex h-3 w-3 bottom-10 left-8">
        <span class="absolute w-full h-full bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        <span class="relative inline-flex animate-pulse rounded-full h-3 w-3 bg-green-400"></span>
      </span>
    </div>
  </div>
</div>


  <div class="flex ">
    <div class="flex card w-96 bg-base-100 shadow-2xl mt-5 border ">
      <figure class="px-12 pt-9">
        <img
          v-for="image in student?.images"
          :key="image"
          :src="image"
          class="rounded-md w-13 h-13"
        />
        <RouterLink
          :to="{ name: 'edit-student', params: { id: student?.id } }"
          class="btn-sm btn-circle px-1 py-1 bg-red-600 bg-opacity-90 hover:bg-red-300 top-5 ml-20 right-10 absolute border-2 border-white dark:border-gray-800 rounded-full"
          ><svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
        </RouterLink>
      </figure>
      <div class="card-body mt-2">
        <h3 class="text-gray-700">
          <span class="font-bold">Student ID: </span>
          <span class="text-gray-400">{{ student?.studentID }}</span>
        </h3>
        <h3 class="text-gray-700">
          <span class="font-bold">Name: </span>
          <span class="text-gray-400">{{ student?.name }}</span>
        </h3>
        <h3 class="text-gray-700">
          <span class="font-bold">Surmame: </span
          ><span class="text-gray-400">{{ student?.surname }}</span>
        </h3>
        <h3 class="text-gray-700">
          <span class="font-bold">Department: </span
          ><span class="text-gray-400">{{ student?.department }}</span>
        </h3>
        <div class="card-actions justify-end"></div>
        <RouterLink  :to="{ name: 'add-comment' }" class="flex justify-start ml-32">
          <button class="transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 duration-300 rounded-md px-2 mr-5 ml-2 min-w-full h-9 bg-gradient-to-r from-red-500 to-orange-500 hover:bg-gradient-to-r hover:from-red-400 hover:to-red-500 text-white">
          Comment</button>
        </RouterLink>
      </div>
    </div>

    <div class="card w-full px-0 ml-2 mr-24">
      <div class="card w-full h-full bg-base-100 shadow-xl mt-5 ml-5 mr-10 border">
        <div class="card-body items-left text-left">
          <h2 class="card-title">Advisor</h2>
          <button
            class="transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-11 duration-30 bg-gray-600 border-2  hover:bg-gray-400 hover:shadow-xl  mt-2 text-black py-2 px-4 rounded-lg w-60"
          >
            <div class="flex items-center">
              <div class="mr-2">
                <figure class="">
                  <img
                    v-for="image in student?.advisor.images"
                    :key="image"
                    :src="image"
                    class="w-12 h-12 p-1 rounded-full" />
                </figure>
              </div>
              <div class="text-left text-white">
                <p class="text-md font-semibold">
                  {{ student?.advisor.name }} {{ student?.advisor.surname }}
                </p>
                <p class="text-md text-gray-200">{{ student?.advisor.department }}</p>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div class="card w-full shadow-xl mt-5 ml-5 mr-10 border">
        <figure class="px-2 pt-2"></figure>
        <div class="card-body items-left text-left">
          <h2 class="card-title">Course</h2>
          <div v-for="course in student?.courses" :key="course.id">
            <div>
              <span
                class="inline-block w-full bg-white border-b-2 border-gray-400 px-3 py-2 text-sm text-gray-800 mr-3 mb-3"
              >
                <span class="font-semibold text-lg text-gray-700"> <span class="text-red-500"> ⦿ </span>{{ course.courseID }} - {{ course.name }}</span>
                <p class="text-sm mt-1 text-gray-400">{{ course.description }}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { StudentInfo } from '@/student'
import StudentService from '@/services/StudentService'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const student = ref<StudentInfo | null>(null)
const props = defineProps({
  id: String
})
StudentService.getStudentByID(Number(props.id))
  .then((response) => {
    student.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })
</script>
