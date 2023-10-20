<template>
    <RouterLink :to="{ name: 'advisor-detail', params: { id: advisor?.id } }">
      <div class="card card-side h-40 bg-base-100 shadow-2xl p-0 mt-5 mr-12 hover:bg-gray-100 border">
        <figure class="px-10">
          <img v-for="image in advisor?.images" :key="image" :src="image" class="w-20 h-20 rounded-md"/>
        </figure>
        <div class="card-body">
          <h2 class="card-title text-gray-600"> {{ advisor?.name }} {{ advisor?.surname }}</h2>
          <h3 class="text-gray-400"> {{ advisor?.department }}</h3>
          <h3 class="text-gray-400"> {{ advisor?.academicPosition }}</h3>
          <div class="mt-1 flex flex-row items-center space-x-1">
          
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
  