<template>
  <div >

      <RouterLink :to="{ name: 'advisor-detail', params: { id: advisor?.id } }"
 class="card card-side transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300 shadow-2xl p-0 mt-5 mr-20 border border-gray-300 hover:bg-gradient-to-r hover:from-red-300 hover:to-orange-400 ">
        <figure class="p-5 ml-5">
          <img v-for="image in advisor?.images" :key="image" :src="image" class="w-20 h-20 rounded-md" alt="advisor image"/>
        </figure>
        <div class="card-body px-6 animate-fade-down">
  <h2 class="card-title text-gray-800 font-bold text-xl"> {{ advisor?.name }} {{ advisor?.surname }} <span class="text-sm font-normal text-gray-500"> advisees {{ advisor.advisees.length }}</span></h2>
          <h3 class="text-gray-400"> {{ advisor?.department }}</h3>
          
          <div class="flex flex-wrap items-center space-x-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ advisor?.academicPosition }}</span>
          </div>
        </div>   
      </RouterLink>
      <div class="container flex justify-end">
  <button
    @click="showAllStudents = !showAllStudents"
    class="bg-red-500 hover:bg-red-300 text-white font-semibold py-2 px-4 rounded-md mt-5 mr-20"
  >
    Show Advisees List
  </button>
</div>

<div v-if="showAllStudents" class=" justify-end">
  <div v-for="student in students" :key="student.id">
    <StudentCard
      class="flex"
      :student="student"
    ></StudentCard>
  </div>
</div>
       </div>

  

  </template>
  <script setup lang="ts">
  import type { AdvisorInfo } from '@/advisor'
  import router from '@/router';
  import AdvisorService from '@/services/AdvisorService';
  import type { StudentInfo } from '@/student';
  import type { AxiosResponse } from 'axios';
  import { ref, type PropType, type Ref, computed } from 'vue'
  import { onBeforeRouteUpdate } from 'vue-router';
  import StudentCard from './StudentCard.vue';

  const students: Ref<Array<StudentInfo>> = ref([])
  const totalStudents = ref<number>(0)
  const totalPages = computed(() => Math.ceil(totalStudents.value / 2))
  const showAllStudents = ref(false);

  const selectedStudent = ref(null) // Define selectedStudent as a reactive variable

  const props = defineProps({
    advisor: {
      type: Object as PropType<AdvisorInfo>,
      required: true
    },
 
    advisorId: {
      type: Number,
      required: true
    }
  })

  AdvisorService.getStudentAdvior(Number(props.advisor?.id))
    .then((response: AxiosResponse<StudentInfo[]>) => {
      console.log(totalPages.value)
      students.value = response.data
    })
    .catch((err) => {
      console.log(err)
    })

</script>
