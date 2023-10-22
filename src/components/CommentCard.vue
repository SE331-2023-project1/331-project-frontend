<template>
    <article class="text-base bg-gray-700 mr-24 rounded-lg shadow-md dark:bg-gray-900 border-2 p-3">
      <footer class="flex justify-between items-center mb-2">
        <div class="flex items-center">
            <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold"><img
                        class="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie Green"> {{ comment.id }}</p>
                <p class="text-sm text-white dark:text-white">{{ comment }}</p>
        </div>
      </footer>
      <p class="text-white  dark:text-gray-400">{{ comment.commentContent }}</p>
      <div class="flex items-center mt-4 space-x-4">
        <button @click="toggleChatBox"
                class="flex items-center text-sm text-white  hover:underline dark:text-gray-400 font-medium">
          <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
          </svg>
          Reply
        </button>
        <button @click="toggleChatBox"
        class="flex items-center text-sm text-white  hover:underline dark:text-gray-400 font-medium">
        <svg class="h-4 w-4 mr-1 text-white " width="24"  height="24"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M12 20h9" />  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
        <span>Edit</span>
        </button>
      </div>
      <div v-if="showChatBox" class="flex items-center mt-4">
  <div class="w-full rounded-lg relative">
    <input v-model="chatMessage" type="text" class="w-full border rounded" placeholder="Type your message..." />
    <button @click="sendMessage" class="absolute right-0 top-1/4 transform -translate-y-1/2  text-white font-bold py-1 px-2">
      <svg class="h-6 w-6 mt-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    </button>
  </div>
</div>




    </article>
  </template>
  
  <script setup lang="ts">
  import type { CommentInfo } from '@/comment'
  import type { PropType } from 'vue'
  import { ref } from 'vue'
  
  const props = defineProps({
    comment: {
      type: Object as PropType<CommentInfo>,
      required: true
    }
  })
  const formattedPostedAt = new Date(props.comment.postedAt).toLocaleString(); // Format the date and time

  const showChatBox = ref(false)
  const chatMessage = ref('')
  
  // Function to toggle the visibility of the chat box
  const toggleChatBox = () => {
    showChatBox.value = !showChatBox.value
  }
  
  // Function to handle sending the message
  const sendMessage = () => {
    // You can handle the logic to send the message here
    console.log('Message sent:', chatMessage.value)
    // Reset the chat input
    chatMessage.value = ''
  }
  </script>
  
  