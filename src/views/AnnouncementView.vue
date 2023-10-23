
<template>
  <div>
			<h1 class="mt-10 mb-5 font-bold text-3xl">Announcement</h1>
      {{ response_announcement }}
  </div>

</template>

<script setup lang="ts">
import type { AnnouncementInfo } from '@/announcement'
import AnnouncementService from '@/services/AnnouncementService';
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue'
const authStore = useAuthStore()
const announcement = ref<AnnouncementInfo>({
  id: 0,
  advisor: 0,
  files: '',
  content: ''
})
const response_announcement =  ref<AnnouncementInfo[]>()

AnnouncementService.getAnnouncement(authStore.getId)
.then((response) => {
  response_announcement.value = response.data
})
  // .then((response)) => {
  //   // announcement.value = response.data
  //   // console.log('hello')
  //   // console.log(announcement.value)
  // })
</script>

















<!--     
    <div class="h-screen flex flex-col gap-10 items-left justify-right bg-white">

    Card 1 -->
<!-- <a href="#" class="w-[73rem] transition ease-in-out delay-100 border-40 border-b-4 border-gray-350 rounded-xl border hover:bg-gray-100 hover:-translate-y-1 hover:scale-110"> --> 

  <!-- <div class="grid grid-cols-10 p-6 gap-y-2">

    <div>
      <img src="https://picsum.photos/seed/2/200/200" class="max-w-20 max-h-20 rounded-full" />
    </div>

    <div class="col-span-5 md:col-span-4 ml-4">

      <p class="text-gray-700 font-bold"> [Intermediate/Advanced] Tea Time Conversation </p>

      <p class="text-gray-400"> Sat, Mar 12 . 7:00 - 8:30 AM </p>

      <p class="text-gray-400"> Beginner speakers </p>
    </div> -->

    <!-- <div class="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
    </div>
  </div>
</a>
</div> -->