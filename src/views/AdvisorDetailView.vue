<template>
    <div>
        <h1 class="text-4xl mt-5 font-bold text-gray-700"> Advisor Detail </h1>
    </div>
<div class="flex">
  
<div class="flex card w-96 bg-base-100 shadow-2xl mt-5">
  <div class="flex justify-start ml-32">
    <button class="btn-sm btn-circle px-1.5 ml-12 mt-2 bg-red-400 hover:bg-gray-500"><svg class="h-5 w-5 text-white text-center"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
</svg>
    </button>
    <button class="btn-sm btn-circle px-1.5 ml-2 mt-2 bg-red-400 hover:bg-gray-500"><svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
    </svg>
    </button>
</div>
  <figure class="px-10 pt-7">
    <img src="https://media.discordapp.net/attachments/1102521841416949850/1163518158435536966/f02bed84317f6e41a5b0118348173512.png?ex=653fddba&is=652d68ba&hm=b43f3c2e84b66e3e721f9854fd84d1fbc4b248e829fa4439b6654fa3931f158b&=&width=1016&height=1016" alt="Shoes" class="rounded-md" />
  </figure>
  <div class="card-body mt-2">
    <h3 class="text-gray-500 "><span class="font-bold">Name:</span> <span class="text-gray-400">{{ advisor?.name }}</span></h3>
    <h3 class="text-gray-500 "><span class="font-bold">Surmame: </span><span class=" text-gray-400">{{ advisor?.surname }}</span></h3>
    <h3 class="text-gray-500 "><span class="font-bold">Department: </span><span class=" text-gray-400">{{ advisor?.department }}</span></h3>
    <h3 class="text-gray-500 "><span class="font-bold">academicPosition: </span><span class=" text-gray-400">{{ advisor?.academicPosition }}</span></h3>



    <div class="card-actions justify-end">
    </div>
  </div>
</div>

<div class="card w-full h-full shadow-2xl mt-5 ml-5 mr-10">
  <div class="card-body items-left text-left ">
    <h2 class="card-title"> Student </h2>
    
<div v-for="advisees in advisor?.advisees" :key="advisees.id" class="text-left">
  <div class="flex items-center"> <!-- Use flex to align image and text -->
    <figure class="mr-3">
      <img src="https://media.discordapp.net/attachments/856454942964056074/1163567240147386491/1e0204b943c97c63bb6bc20698172552.png?ex=65400b70&is=652d9670&hm=048986c5401505c13826c348e4aa2b3a00e60707331ae510c00e072d8e4cfc17&=&width=537&height=646" class="w-20 h-20 rounded-full">
    </figure>
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