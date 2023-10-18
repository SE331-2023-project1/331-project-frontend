<template>
    <RouterLink :to="{ name: 'advisor-detail', params: { id: advisor?.id } }">
      <div class="card card-side h-40 bg-base-100 shadow-2xl p-0 mt-5 mr-10 hover:bg-gray-100">
        <figure class="px-10">
          <img src="https://media.discordapp.net/attachments/1102521841416949850/1163518158435536966/f02bed84317f6e41a5b0118348173512.png?ex=653fddba&is=652d68ba&hm=b43f3c2e84b66e3e721f9854fd84d1fbc4b248e829fa4439b6654fa3931f158b&=&width=1016&height=1016" class="w-20 h-25"/>
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
  