<template>
  <RouterLink :to="{ name: 'student-detail', params: { id: student?.id } }">
    <div class="card card-side bg-base-100 shadow-2xl p-0 mt-5 mr-10 hover:bg-gray-100">
      <figure class="pd-5 px-6 ml-5">
        <img  v-for="image in student?.images" :key="image" :src="image" class="w-20 h-25 rounded-md"/>
      </figure>
      <div class="card-body px-6">
        <h2 class="card-title text-gray-600"> {{ student?.name }} {{ student?.surname }}</h2>
        <h3 class="text-gray-400"> {{ student?.studentID }}</h3>
        <div class="mt-1 flex flex-row items-center space-x-1">
        <div v-for="course in student?.courses" :key="course.id">
            <div>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{course.name}}</span>
  </div>
        </div>
        
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
