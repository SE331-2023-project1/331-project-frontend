
<template>
  <!-- <div>
			<h1 class="mt-10 mb-5 font-bold text-3xl">Announcement</h1>
      <div class="card card-side transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300 shadow-2xl p-0 mt-5 mr-20 border border-gray-300 hover:bg-gradient-to-r hover:from-red-300 hover:to-orange-400 ">
        <figure class="p-5 ml-5">
          <img v-for="image in advisor?.images" :key="image" :src="image" class="w-20 h-20 rounded-full" alt="advisor image"/>
        </figure>
        <div class="card-body px-6 animate-fade-down">
          <h2 class="card-title text-gray-800 font-bold text-xl"> {{ advisor?.name }}</h2>
          <h1 class="card-title text-gray-800 font-bold text-xl"> {{ announcement.content }}</h1>
          <h1 class="card-title text-gray-800 font-bold text-xl"> {{ announcement.files }}</h1>
          
          <div class="flex flex-wrap items-center space-x-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ advisor?.academicPosition }}</span>
          </div>
        </div>         
       </div>
      </div> -->
      <AnnouncementCard v-for="announcement in response_announcement" :key="announcement.id" :announcement="announcement">
    </AnnouncementCard>
</template> 

<script setup lang="ts">
import type { AnnouncementInfo } from '@/announcement'
import AnnouncementService from '@/services/AnnouncementService';
import { useAuthStore } from '@/stores/auth';
import type { AdvisorInfo } from '@/advisor'
import { useRouter } from 'vue-router'
import AnnouncementCard from '@/components/AnnouncementCard.vue';
import type { PropType } from 'vue'
  const props = defineProps({
    advisor: {
      type: Object as PropType<AdvisorInfo>,
      require: true
    }
  })
import { ref } from 'vue'
const authStore = useAuthStore()
const announcement = ref<AnnouncementInfo>({
  id: 0,
  advisor : {
      id: 0,
    academicPosition: '',
    name: '',
    surname: '',
    images: [],
    department: ''
    },
  files: [],
  content: ''
})
const response_announcement =  ref<AnnouncementInfo[]>()
if(authStore.isStudent){
  AnnouncementService.getAnnouncement(authStore.getId)
.then((response) => {
  console.log(authStore.getId)
  console.log(response.data)
  response_announcement.value = response.data
})
}
if(authStore.isAdvisor){
  AnnouncementService.getAnnouncementForAdvisor(authStore.getId)
.then((response) => {
  console.log(authStore.getId)
  console.log(response.data)
  response_announcement.value = response.data
})
}


const createAnnounce = ref<AnnouncementInfo[]>()
const files = ref<AnnouncementInfo | null>(null);

// AnnouncementService.announcement(authStore.getId,files)
// .then((response) => {
//   announcement.value = response.data
//   console.log(createAnnounce.value)
// })
//     .catch(() => {
//       router.push({ name: 'network-error' })
//     })
  
</script>