<template>
  <div class="p-4 mt-5 bg-gray-200 border rounded-lg transition duration-300 ease-in-out hover:bg-blue-200 mr-20">
    <div class="flex items-center">
      <div class="inline-flex items-center text-xs md:text-sm text-gray-900 dark:text-white font-semibold">
        <img
          v-for="image in announcement?.advisor.images"
          :key="image"
          :src="image"
          class="mr-2 w-10 h-10 rounded-full"
          alt="img_advisor"
        />
      </div>
      <div class="flex">
        <p class="text-xs md:text-sm lg:text-base text-black font-bold dark:text-white ml-2">
          {{ announcement?.advisor.name }} {{ announcement?.advisor.surname }}
        </p>
      </div>
    </div>
    <div class="flex">
      <p class="mt-2 mb-2 text-xs md:text-sm lg:text-base text-black-700 dark:text-white mr-1">
        {{ announcement?.content}}
      </p>
    </div>
    <a v-if="announcement?.files[0]" 
    :href="announcement.files[0]"
    class="text-xs md:text-sm hover:underline lg:text-base text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out">
      Download file
    </a>
  </div>     
</template>



<script setup lang="ts">

import type { PropType } from 'vue'
import type { AnnouncementInfo } from '@/announcement'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore()
defineProps({
  announcement: {
    type: Object as PropType<AnnouncementInfo>,
    require: true
  }
})

</script>

<style scoped></style>