<template>
  <!-- component -->
  <div class="mt-10 mb-5">
    <h1 class="font-bold text-3xl">Add Post</h1>
  </div>
  <div class="flex items-center justify-center">
    <div class="max-w-7xl mr-20 w-full  bg-white-100 p-8 shadow-2xl border rounded-br-3xl rounded-tl-3xl ">
      <form>
        <!-- Post Content Section -->
        <div
        @dragover.prevent
        @drop.prevent="handleDrop"
        class="your-drop-area-styles"
        >
        <div class="mb-6">
          <label for="postContent" class="block text-black text-md font-bold mb-2">New Post</label>
          <textarea
            id="postContent"
            name="postContent"
            rows="4"
            class="w-full border-2 border-gray-300 rounded-md srounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out text-sm resize-none focus:outline-none focus:border-blue-500"
            placeholder="Start a new conversation"
          ></textarea>
        </div>
        <!-- File Attachment Section -->
        <div>
          <div class="flex border-2 rounded-md border-gray-300  bg-gray-100 ">
            <div>
            </div>
            <label for="fileInput" class=" bg-red-500 w-30 px-4 py-2 hover:bg-gray-500 rounded-sm">
              <div 
              class="flex" 
              >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
</svg>

            </div>
              <input type="file" id="fileInput" class="hidden" @change="handleFileSelect" />
            </label>
            <p class="ml-3 mt-2">{{ selectedFile ? selectedFile.name : 'Click icon to select a file' }}</p>
          </div>
        </div>

        <RouterLink  :to="{ name: 'announcement' }">
        <div class="flex items-center justify-end mt-5 animate-fade-right ">
          <button
            @click="confirmFile"
            type="submit"
            class="flex justify-center items-center bg-red-500 focus:outline-none focus:shadow-outline-blue text-white py-2 px-4 rounded-md transition duration-300 gap-2 animate-fade-right
"
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
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { type AdvisorInfo } from '@/advisor';
import UploadFile from '@/services/UploadFile'
import { useRouter } from 'vue-router'
// import UploadFile from '@/components/UploadFile.vue'
const selectedFile = ref<File | null>(null);
const router = useRouter()
const files = ref<FileList | null>(null);
const advisor = ref<AdvisorInfo>({
  id: 0,
  name: '',
  surname: '',
  department: '',
  images: [],
  file: [],
  academicPosition: '',
  advisees: [{ id: 1, name: '', studentID: '', surname: '', images: [] }]
})

const handleDrop = (event : DragEvent) => {
  event.preventDefault();
  if ( event.dataTransfer?.files != null){
    files.value = event.dataTransfer.files
    handleFiles(files.value)
  }
};

const handleFileSelect = (event : Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    files.value = target.files;
    handleFiles(files.value);
  }
};

const handleFiles = (files: FileList) => {
  const file = files[0]
  selectedFile.value = file
  console.log(file)

};
const confirmFile = () => {
  if (files.value) {
    const formData = new FormData();
    formData.append('file', files.value[0]);
    UploadFile.uploadFile(formData);
  }
  router.push({ name: 'announcement' })
  
};

</script>

