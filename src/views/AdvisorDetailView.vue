<template>
<div class="flex items-center justify-between sm:py-3 z-auto mr-12">
  <div class="flex items-center">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9 mr-2 text-red-500 mt-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
</svg>

    <h1 class="text-4xl mt-5 font-bold text-gray-700"> Advisor Detail </h1>
    </div>
    <div class="ml-auto">
  </div>
    <RouterLink :to="{ name: 'add-post' } "
    class="btn bg-gradient-to-r text-white from-red-500 to-orange-500 flex items-center mt-5 mr-10 px-6 py-3">Add Post
    
  </RouterLink>
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



<div class="flex">
<div class="flex card w-96 bg-base-100 shadow-2xl mt-5">
  <figure class="px-12 pt-9">
    <img 
    v-for="image in advisor?.images" 
    :key="image" 
    :src="image" alt="Shoes" class="rounded-md w-13 h-13" />
  </figure>
  <div class="card-body mt-2">
    <h3 class="text-gray-500 "><span class="font-bold">Name:</span> <span class="text-gray-400">{{ advisor?.name }}</span></h3>
    <h3 class="text-gray-500 "><span class="font-bold">Surmame: </span><span class=" text-gray-400">{{ advisor?.surname }}</span></h3>
    <h3 class="text-gray-500 "><span class="font-bold">Department: </span><span class=" text-gray-400">{{ advisor?.department }}</span></h3>
    <h3 class="text-gray-500 "><span class="font-bold">academicPosition: </span><span class=" text-gray-400">{{ advisor?.academicPosition }}</span></h3>


    <div class="card-actions justify-end">
      <RouterLink  :to="{ name: 'add-comment' }" class="flex justify-start ml-32">
          <button class="transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 duration-300 rounded-md px-2 mr-5 ml-2 min-w-full h-9 bg-gradient-to-r from-red-500 to-orange-500 hover:bg-gradient-to-r hover:from-red-400 hover:to-red-500 text-white">
          Comment</button>
        </RouterLink>
    <RouterLink
          :to="{ name: 'edit-advisor', params: { id: advisor?.id } }"
          class="btn-sm btn-circle px-1 py-1  bg-red-600 bg-opacity-70 hover:bg-red-300 top-5 ml-30 right-9 absolute border-2 border-white dark:border-gray-800 rounded-full"
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
    
<div v-for="advisees in advisor?.advisees" :key="advisees.id" class="text-left items-center">
  <RouterLink
      :to="{ name: 'student-detail', params: { id:advisees.id } }"
   class="flex items-center px-1 py-2 card-side transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 text-gray-700 text-3xl font-bold border-b-2 border-gary-400 w-full hover:bg-gray-200 "> 
    <figure class="mr-3">
      <img  v-for="image in advisees?.images" :key="image" :src="image" class="w-12 h-15 rounded-full">
    </figure>
    <span class="">
      <p class="text-sm mt-1 text-gray-400">ID: {{ advisees.studentID }}</p>
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
import { useAuthStore } from '@/stores/auth'
import AdvisorService from '@/services/AdvisorService';
    const advisor = ref<AdvisorInfo | null>(null)
    const authStore = useAuthStore()
    const props = defineProps({
        id: String
    })
    AdvisorService.getAdvisorByID(Number(props.id)).then((response) => {
    advisor.value = response.data
    }).catch(error => {
        console.log(error)
    })
</script>