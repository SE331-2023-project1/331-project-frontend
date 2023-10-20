<template>
<div class="flex items-center justify-between">
    <h1 class="text-4xl mt-5 font-bold text-gray-700"> Advisor Detail </h1>
    <RouterLink :to="{ name: 'add-post' } "
    class="btn bg-gradient-to-r text-white from-red-500 to-orange-500 flex items-center mt-5 mr-10 px-6 py-3">Add Post
  </RouterLink>
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
      <button class="rounded-md px-2 mr-5 ml-2 min-w-full h-9 bg-gradient-to-r from-red-500 to-orange-500 hover:bg-gray-400 text-white">
          Comment</button>
    <RouterLink
          :to="{ name: 'edit-advisor', params: { id: advisor?.id } }"
          class="btn-sm btn-circle px-1 py-1 bg-gray-600 bg-opacity-90 hover:bg-gray-400 top-5 ml-20 right-10 absolute border-2 border-white dark:border-gray-800 rounded-full"
          ><svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
        </RouterLink>
    </div>
  </div>
</div>

<div class="card w-full  shadow-2xl mt-5 ml-5 mr-10">
  <div class="card-body items-left text-left">
    <h2 class="card-title"> Student </h2>
    
<div v-for="advisees in advisor?.advisees" :key="advisees.id" class="text-left">
  <RouterLink
      :to="{ name: 'student-detail', params: { id: advisor?.id } }"
   class="flex items-center px-1 py-2 text-gray-700 text-3xl font-bold border-b-2 border-gary-400 w-full hover:bg-gray-200 hover:rounded-md"> 
    <figure class="mr-3">
      <img  v-for="image in advisees?.images" :key="image" :src="image" class="w-12 h-15 rounded-full">
    </figure>
    <span class="">
      <p class="text-sm mt-1 text-gray-400">{{ advisees.studentID }}</p>
      <span class="font-semibold text-lg">{{advisees.name}} {{advisees.surname}}</span>
    </span>
</RouterLink>
</div>

</div>

 </div>
 
 </div>

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