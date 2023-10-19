<template>
    <div>
        <h1 class="text-4xl mt-5 font-bold text-gray-700"> Advisor Detail </h1>
    </div>
<div class="flex">
  
<div class="flex card w-96 bg-base-100 shadow-2xl mt-5">

  <figure class="px-10 pt-7">
          <img v-for="image in advisor?.images" :key="image" :src="image" alt="Shoes" class="rounded-md" />
  </figure>
  <div class="card-body mt-2">
    <h3 class="text-gray-500 "><span class="font-bold">Name:</span> <span class="text-gray-400">{{ advisor?.name }}</span></h3>
    <h3 class="text-gray-500 "><span class="font-bold">Surmame: </span><span class=" text-gray-400">{{ advisor?.surname }}</span></h3>
    <h3 class="text-gray-500 "><span class="font-bold">Department: </span><span class=" text-gray-400">{{ advisor?.department }}</span></h3>
    <h3 class="text-gray-500 "><span class="font-bold">academicPosition: </span><span class=" text-gray-400">{{ advisor?.academicPosition }}</span></h3>


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

<div class="card w-full h-full shadow-2xl mt-5 ml-5 mr-10">
  <div class="card-body items-left text-left ">
    <h2 class="card-title"> Student </h2>
    
<div v-for="advisees in advisor?.advisees" :key="advisees.id" class="text-left">
  <div class="flex items-center"> 
    <figure class="mr-3">
      <img  v-for="image in advisees?.images" :key="image" :src="image" class="w-12 h-15 rounded-full">
    </figure><!-- Use flex to align image and text -->    
    <span class="inline-block w-full bg-white border border-gray-400 rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-100">
      <p class="text-sm mt-1 text-gray-400">{{ advisees.studentID }}</p>
      <span class="font-semibold text-lg">{{advisees.name}} {{advisees.surname}}</span>
    </span>
  </div>
</div>
</div>
 </div>
 </div>

<!--   
</div> -->
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import type { Ref } from 'vue'
    import type { AdvisorInfo } from '@/advisor';
import AdvisorService from '@/services/AdvisorService';
    const advisor = ref<AdvisorInfo | null>(null)
    const props = defineProps({
        id: String
    })
    AdvisorService.getAdvisorByID(Number(props.id)).then((response) => {
    advisor.value = response.data
    }).catch(error => {
        console.log(error)
    })
</script>