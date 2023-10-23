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
  <div class="mt-10 mb-5">
    <h1 class="font-bold text-3xl">Add Post</h1>
  </div>
  <div class="flex items-center justify-center">
    <div
      class="max-w-7xl mr-20 w-full bg-white-100 p-8 shadow-2xl border rounded-br-3xl rounded-tl-3xl"
    >
      <form class="mb-10">
        <div @dragover.prevent @drop.prevent="handleDrop" class="your-drop-area-styles">
          <div class="mb-6">
            <label for="postContent" class="block text-black text-md font-bold mb-2"
              >New Post</label
            >
            <textarea
              v-model="announcement.content"
              id="postContent"
              name="postContent"
              rows="4"
              class="w-full border-2 border-gray-300 rounded-md srounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out text-sm resize-none focus:outline-none focus:border-blue-500"
              placeholder="Start a new conversation"
            ></textarea>
          </div>
          <!-- File Attachment Section -->
          <div>
            <div class="flex border-2 rounded-md border-gray-300 bg-gray-100">
              <div></div>
              <label for="fileInput" class="bg-red-500 w-30 px-4 py-2 hover:bg-gray-500 rounded-sm">
                <div class="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                </div>
                <input
                  v-modle="announcement.files"
                  type="file"
                  id="fileInput"
                  class="hidden"
                  @change="handleFileSelect"
                />
              </label>
              <p class="ml-3 mt-2">
                {{ selectedFile ? selectedFile.name : 'Click icon to select a file' }}
              </p>
            </div>
          </div>

          <RouterLink :to="{ name: 'announcement' }">
            <div class="flex items-center justify-end mt-5 animate-fade-right">
              <button
                @click="confirmFile"
                type="submit"
                class="flex justify-center items-center bg-red-500 focus:outline-none focus:shadow-outline-blue text-white py-2 px-4 rounded-md transition duration-300 gap-2 animate-fade-right"
              >
                Post
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  id="send"
                  fill="#fff"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path
                    d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"
                  ></path>
                </svg>
              </button>
            </div>
          </RouterLink>
        </div>
      </form>
    </div>
  </div>

  <AnnouncementCard
    v-for="announcement in response_announcement"
    :key="announcement.id"
    :announcement="announcement"
  >
  </AnnouncementCard>
</template>

<script setup lang="ts">
import type { AnnouncementInfo } from '@/announcement'
import AnnouncementService from '@/services/AnnouncementService'
import { useAuthStore } from '@/stores/auth'
import type { AdvisorInfo } from '@/advisor'
import { useRouter } from 'vue-router'
import AnnouncementCard from '@/components/AnnouncementCard.vue'
import type { PropType } from 'vue'
import UploadFile from '@/services/UploadFile'
const selectedFile = ref<File | null>(null)
const router = useRouter()
import { defineProps } from 'vue'
const authUser = useAuthStore()
import type { FileURL } from '@/announcement'
const files = ref<FileList | null>(null)
const showAnnouncementCard = ref(false)
const fileURL = ref<FileURL>()
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
  advisor: {
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
const response_announcement = ref<AnnouncementInfo[]>()
if (authStore.isStudent) {
  AnnouncementService.getAnnouncement(authStore.getId).then((response) => {
    console.log(authStore.getId)
    console.log(response.data)
    response_announcement.value = response.data
  })
}
if (authStore.isAdvisor) {
  AnnouncementService.getAnnouncementForAdvisor(authStore.getId).then((response) => {
    console.log(authStore.getId)
    console.log(response.data)
    response_announcement.value = response.data
  })
}

const handleDrop = (event: DragEvent) => {
  event.preventDefault()
  if (event.dataTransfer?.files != null) {
    files.value = event.dataTransfer.files
    handleFiles(files.value)
  }
}

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files) {
    files.value = target.files
    handleFiles(files.value)
  }
}

const handleFiles = (files: FileList) => {
  const file = files[0]
  selectedFile.value = file
  console.log(file)
}
const confirmFile = () => {
  if (files.value) {
    const formData = new FormData()
    formData.append('file', files.value[0])
    UploadFile.uploadFile(formData).then((response) => {
      console.log(response.data)
      fileURL.value = response.data
      announcement.value.files.push(fileURL.value.name)
      console.log(fileURL.value.name)
      AnnouncementService.saveAnnouncement(authUser.getId, announcement.value).then(() => {
        if (authStore.isStudent) {
          AnnouncementService.getAnnouncement(authStore.getId).then((response) => {
            console.log(authStore.getId)
            console.log(response.data)
            response_announcement.value = response.data
          })
        }
        if (authStore.isAdvisor) {
          AnnouncementService.getAnnouncementForAdvisor(authStore.getId).then((response) => {
            console.log(authStore.getId)
            console.log(response.data)
            response_announcement.value = response.data
          })
          announcement.value.content=''
          announcement.value.files = []
          selectedFile.value = null
        }
      })
    })
  } else {
    announcement.value.files = []
    AnnouncementService.saveAnnouncement(authUser.getId, announcement.value).then(() => {
      if (authStore.isStudent) {
        AnnouncementService.getAnnouncement(authStore.getId).then((response) => {
          console.log(authStore.getId)
          console.log(response.data)
          response_announcement.value = response.data
        })
      }
      if (authStore.isAdvisor) {
        AnnouncementService.getAnnouncementForAdvisor(authStore.getId).then((response) => {
          console.log(authStore.getId)
          console.log(response.data)
          response_announcement.value = response.data
        })
      }
      announcement.value.content=''
    })
    console.log(announcement.value)
  }

  // AnnouncementService.saveAnnouncement(authUser.getId,announcement.value)
  //   .then((response) => {
  //     c
  //   })
}
// AnnouncementService.announcement(authStore.getId,files)
// .then((response) => {
//   announcement.value = response.data
//   console.log(createAnnounce.value)
// })
//     .catch(() => {
//       router.push({ name: 'network-error' })
//     })
</script>
