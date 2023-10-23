<template>
  <div class="p-4 m-4 border rounded-lg transition duration-300 ease-in-out hover:bg-blue-200">
    <p class="inline-flex items-center text-sm text-gray-900 dark:text-white font-semibold">
          <img
            v-for="image in announcement?.advisor.images"
            :key="image"
            :src="image"
            class="mr-2 w-10 h-10 rounded-full"
            alt="img_advisor"
          />
        </p>
        <div class="flex">
        <p class="text-sm text-black font-bold dark:text-white mr-1">
          {{ announcement?.advisor.name }} {{ announcement?.advisor.surname }}
        </p>

        </div>
        <div class="flex">
          <p class="text-sm text-black-700 font-bold dark:text-white mr-1">
          {{ announcement?.content}}
        </p>
        </div>

  <a v-if="announcement?.files[0]" 
  :href="announcement.files[0]">
     Dowload file
  </a>
  </div>     
</template>
<script setup lang="ts">

import type { PropType } from 'vue'
import type { AnnouncementInfo } from '@/announcement'
import { useRouter } from 'vue-router'
defineProps({
  announcement: {
    type: Object as PropType<AnnouncementInfo>,
    require: true
  }
})

</script>

<style scoped></style>