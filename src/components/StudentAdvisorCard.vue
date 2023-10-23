<template>
    <RouterLink :to="{ name: 'student-detail', params: { id: student?.id } }"
      class="card card-side transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300 shadow-2xl p-0 mt-5 mr-20 border border-gray-300 hover:bg-gradient-to-r hover:from-red-300 hover:to-orange-400">
        <figure class="p-5 ml-5 ">
          <img v-for="image in student?.images" :key="image" :src="image" class="w-20 h-25 rounded-md" alt="student image" />
        </figure>
        <div class="card-body px-6 animate-fade-down">
          <h2 class="card-title text-gray-800 font-bold text-xl">{{ student?.name }} {{ student?.surname }}</h2>
          <h3 class="text-gray-500 text-sm">ID: {{ student?.studentID }}</h3>
          <div class="flex flex-wrap items-center space-x-2">
            <div v-for="course in student?.courses" :key="course.id">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ course.name }}</span>
            </div>
          </div>
        </div>
    </RouterLink>
  </template>
  
  
  <script setup lang="ts">
  import type { StudentInfo } from '@/student'
  import type { PropType } from 'vue'
  const props = defineProps({
    student: {
      type: Object as PropType<StudentInfo>,
      require: true
    }
  })
  </script>
  
  <style scoped></style>