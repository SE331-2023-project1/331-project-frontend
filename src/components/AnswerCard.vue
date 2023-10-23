<template>
    <article class="text-base bg-gray-700 border-t-2 border-gray-500 mr-24 shadow-md dark:bg-gray-900 p-2">
      <footer class="flex justify-between items-center mb-2">
        <div class="flex items-center">
    <p class="inline-flex items-center text-sm text-gray-900 dark:text-white font-semibold">
      <img v-for="image in answer.comment.student.images" :key="image" :src="image" class="mr-2 w-6 h-6 rounded-full" alt="img_advisor">
    </p>

    <p class="text-sm text-white dark:text-white mr-1 font-semibold">{{ answer.comment.student.name }}</p>

    <p class="text-sm text-gray-300 dark:text-white"> replied to {{ answer.comment.advisor.name }}</p>
    <p class="text-sm text-gray-300 dark:text-white">: {{ formattedPostedAt }}</p>

    <button @click="toggleChatBox"
        class="flex items-center text-sm text-white ml-3 hover:underline dark:text-gray-400 font-medium">
        <svg class="h-4 w-4 mr-1 text-white " width="24"  height="24"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M12 20h9" />  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
        <span>Edit</span>
        </button>
    <div class="ml-80">
    <!-- <p class="text-sm text-gray-300 dark:text-white ml-80">{{ answer.comment.postedAt }}</p> -->
    
</div>

  </div>
      </footer>
      <!-- <p class="text-white  dark:text-gray-400">{{ answer.comment.student.name }} {{ answer.comment.student.surname }} </p> -->
      <div v-if="answer.content" class="text-white">{{ answer.content }}</div>
      
      <div class="flex items-center mt-4 space-x-4">
      </div>

      <div v-if="showChatBox" class="flex items-center mt-4">

  <div class="w-full rounded-lg relative">
    
    <input v-model="answer_edit.content" type="text" class="w-full border rounded" placeholder="Type your message..." />
    <button @click="editAnswer" class="absolute right-0 top-1/4 transform -translate-y-1/2  text-white font-bold py-1 px-2">
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
  import type { AnswerInfo, CommentInfoDTO,AnswerReturnList,AnswerInfoDTO } from '@/answer'
import AnswerService from '@/services/AnswerService';

  import type { PropType } from 'vue'
  import { ref,computed } from 'vue'
  import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance();
  const props = defineProps({
    answer: {
      type: Object as PropType<AnswerReturnList>,
      required: true
    }
  })

  const showChatBox = ref(false)
  const chatMessage = ref('')
    const toggleChatBox = () => {
    showChatBox.value = !showChatBox.value
  }
    const sendMessage = () => {
    console.log('Message sent:', chatMessage.value)
    chatMessage.value = ''
  }


  const answer_edit = ref<AnswerInfoDTO>({
  id: props.answer.id,
  content: '',
})

  const formattedPostedAt = computed(() => {
  const date = new Date(props.answer.comment.postedAt)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear().toString().slice(-2)
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')
  return `${day}/${month}/${year} ${hours}:${minutes}`
})



function editAnswer() {
  AnswerService.editAnswer(answer_edit.value)
    .then((response) => {
      console.log(response.data);
      answer_edit.value.content = ''
      showChatBox.value = !showChatBox.value
      instance?.emit('answer-edited')
      // comment_edit.value.commentContent=''
      // instance?.emit('comment-edited')
      // Perform any necessary actions after editing the comment
    });
}
  </script>
  
  