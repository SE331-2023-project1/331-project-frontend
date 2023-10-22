<template>
    <RouterLink :to="{ name: 'advisor-detail', params: { id: advisor?.id } }">
      <div class="card card-side transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300 shadow-2xl p-0 mt-5 mr-20 border border-gray-300 hover:bg-gradient-to-r hover:from-red-300 hover:to-orange-400 ">
        <figure class="p-5 ml-5">
          <img v-for="image in advisor?.images" :key="image" :src="image" class="w-20 h-20 rounded-md" alt="advisor image"/>
        </figure>
        <div class="card-body px-6 animate-fade-down">
          <h2 class="card-title text-gray-800 font-bold text-xl"> {{ advisor?.name }} {{ advisor?.surname }}</h2>
          <h3 class="text-gray-400"> {{ advisor?.department }}</h3>
          <h3 class="text-gray-400"> {{ advisor?.academicPosition }}</h3>
          
          <div class="mt-1 flex flex-row items-center space-x-2">
          </div>
      </div>
        </div>
    </RouterLink>
  </template>
  <script setup lang="ts">
  import type { AdvisorInfo } from '@/advisor'
  import type { PropType } from 'vue'
  const props = defineProps({
    advisor: {
      type: Object as PropType<AdvisorInfo>,
      require: true
    }
  })
  </script>
  
  <style scoped></style>
  