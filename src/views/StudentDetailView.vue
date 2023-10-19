<template>
    <div>
        <h1 class="text-4xl mt-5 font-bold text-gray-700"> Student Detail </h1>
    </div>
<div class="flex">
  
<div class="flex card w-96 bg-base-100 shadow-2xl mt-5">

  <figure class="px-10 pt-7">
    <img v-for="image in student?.images" :key="image" :src="image" class="rounded-md"/>
  </figure>
  <div class="card-body mt-2">
    <h3 class="text-gray-500"><span class="font-bold">Student ID:</span> <span class="text-gray-400">{{ student?.studentID }}</span></h3>
  
    <h3 class="text-gray-500 "><span class="font-bold">Name:</span> <span class="text-gray-400">{{ student?.name }}</span></h3>
    <h3 class="text-gray-500 "><span class="font-bold">Surmame: </span><span class=" text-gray-400">{{ student?.surname }}</span></h3>
    <h3 class="text-gray-500 "><span class="font-bold">Department: </span><span class=" text-gray-400">{{ student?.department }}</span></h3>



    <div class="card-actions justify-end">
    </div>
    <div class="flex justify-start ml-32">
    <button class="btn btn-circle px-1.5 ml-12 mt-2 bg-gray-600 hover:bg-gray-400"><svg class="h-7 w-7 text-white text-center"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
</svg>
    </button>
    <button class="btn btn-circle px-1.5 ml-2 mt-2 bg-gray-600 hover:bg-gray-400"><svg class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
    </svg>
    </button>
    
</div>
  </div>
  
</div>


<div class="card w-full h-full ml-2 mr-20">
<div class="card w-full h-full bg-base-100 shadow-2xl mt-5 ml-5 mr-10">

  <div class="card-body items-left text-left">
    <h2 class="card-title"> Advisor </h2>
    <button class="bg-white border border-gray-400 hover:bg-gray-300  mt-2 text-black py-2 px-4 rounded w-60">
    <div class="flex items-center ">
  <div class="mr-5">
    <figure class="px10">
      <img  v-for="image in student?.advisor.images" :key="image" :src="image" class="w-12 h-12 rounded-full"/>
        </figure>
  </div>
  <div class="text-left">
    <p class="text-md font-semibold">{{ student?.advisor.name }} {{ student?.advisor.surname }}</p>
    <p class="text-md text-gray-400">{{ student?.advisor.department }}</p>
  </div>
</div>

</button>



</div>
  </div>
  <div class="card w-full h-full shadow-2xl mt-5 ml-5 mr-10">
  <figure class="px-2 pt-2">
  </figure>
  <div class="card-body items-left text-left">
    <h2 class="card-title"> Course </h2>
    <div v-for="course in student?.courses" :key="course.id">
      <div>
  <span class="inline-block w-full bg-white border border-gray-400 rounded-md px-3 py-2 text-sm text-gray-800 mt-2 mr-3 mb-3 ">
    <span class="font-semibold text-lg">{{course.courseID}} - {{course.name}}</span>
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
    import type { Ref } from 'vue'
    import type { StudentInfo } from '@/student';
    import StudentService from '@/services/StudentService';
    const student = ref<StudentInfo | null>(null)
    const props = defineProps({
        id: String
    })
    StudentService.getStudentByID(Number(props.id)).then((response) => {
    student.value = response.data
    }).catch(error => {
        console.log(error)
    })
</script>