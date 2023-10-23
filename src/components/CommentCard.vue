<template>
  <article class="text-base bg-gradient-to-bl from-gray-800 to-gray-800 mr-24 shadow-md dark:bg-gray-900 mt-2 p-3 relative">
    <footer class="flex justify-between items-center mb-2">
      <div class="flex items-center">
        <p class="inline-flex items-center text-sm text-gray-900 dark:text-white font-semibold">
          <img
            v-for="image in comment.advisor?.images"
            :key="image"
            :src="image"
            class="mr-2 w-10 h-10 rounded-full"
            alt="img_advisor"
          />
        </p>
        <div class="flex">
        <p class="text-sm text-white font-bold dark:text-white mr-1">
          {{ comment.advisor?.name }} {{ comment.advisor?.surname }}
        </p>
    </div>
        <p class="text-sm text-gray-300 dark:text-white">to {{ comment.student.name }}</p>
        <div>
          <p class="text-sm text-gray-300 dark:text-white">: {{ formattedPostedAt }}</p>
        </div>
        <div class="absolute top-6 right-6">
        <button
          @click="toggleChatBoxEdit"
          class="flex items-center text-sm text-white hover:underline dark:text-gray-400 font-medium"
        >
          <svg
            class="h-4 w-4 mr-1 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
          <span>Edit</span>
        </button>
        <div v-if="showChatBoxEdit" class="flex items-center mt-4">
      <div class="w-full rounded-lg relative">
        <form @submit.prevent="answerComment">
          <input
            v-model="comment_edit.commentContent"
            type="text"
            class="w-full border rounded"
            placeholder="Type your message..."
          />
          <button
            @click="editComment"
            class="absolute right-0 top-1/4 transform -translate-y-1/2 text-white font-bold py-1 px-2"
          >
            <svg
              class="h-6 w-6 mt-5 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>
      </div>
    </div>



      </div>
    </div>
    </footer>
    <p class="text-white dark:text-gray-400">{{ comment.commentContent }}</p>
    <div class="flex items-center mt-4 space-x-4">
      <button
        @click="toggleChatBox"
        class="flex items-center text-sm text-white hover:underline dark:text-gray-400 font-medium"
      >
        <svg
          class="mr-1.5 w-3.5 h-3.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 18"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
          />
        </svg>
        Reply
      </button>
    </div>
    <div v-if="showChatBox" class="flex items-center mt-4">
      <div class="w-full rounded-lg relative">
        <form @submit.prevent="answerComment">
          <input
            v-model="answer.content"
            type="text"
            class="w-full border rounded"
            placeholder="Type your message..."
          />
          <button
            @click="sendMessage"
            class="absolute right-0 top-1/4 transform -translate-y-1/2 text-white font-bold py-1 px-2"
          >
            <svg
              class="h-6 w-6 mt-5 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </article>
  <div>
    <AnswerCard v-for="answer in respone_answer" :key="answer.id" :answer="answer"></AnswerCard>
  </div>
</template>

<script setup lang="ts">
import type { AnswerInfo } from '@/answer'
import type { CommentInfoDTO, CommentInfo, AdvisorCommentInfo } from '@/comment'
import AnswerService from '@/services/AnswerService'
import AnswerCard from '@/components/AnswerCard.vue'
import type { PropType } from 'vue'
import { ref, computed } from 'vue'
import type { AnswerReturnList } from '@/answer'
import CommentService from '@/services/CommentService'
import router from '@/router'
import { getCurrentInstance } from 'vue';
import { useMessageStore } from '@/stores/message'
const instance = getCurrentInstance();
const store = useMessageStore()
const props = defineProps({
  comment: {
    type: Object as PropType<CommentInfoDTO>,
    required: true
  }
})

const answer = ref<AnswerInfo>({
  id: 0,
  content: '',
  comment: {
    id: props.comment.id,
    answer: [],
    commentContent: '',
    postedAt: '',
    advisor: {
      id: 0,
      academicPosition: '',
      name: '',
      surname: '',
      images: [],
      department: ''
    },
    student: {
      id: 0,
      studentID: '',
      name: '',
      surname: '',
      department: '',
      images: []
    }
  }
})

const comment_edit = ref<CommentInfo>({
  id: props.comment.id,
  commentContent: '',
  advisorId: 0
})

const respone_answer = ref<AnswerReturnList[]>([])
AnswerService.getAllAnswerByCommentId(props.comment).then((response) => {
  respone_answer.value = response.data
})

const showChatBox = ref(false)
const chatMessage = ref('')
const toggleChatBox = () => {
  showChatBox.value = !showChatBox.value
}

const showChatBoxEdit = ref(false)
const toggleChatBoxEdit = () => {
    showChatBoxEdit.value = !showChatBoxEdit.value
}

const sendMessage = () => {
  console.log(answer.value)

  AnswerService.saveAnswer(answer.value).then(() => {
    AnswerService.getAllAnswerByCommentId(props.comment).then((response) => {
      respone_answer.value = response.data
      showChatBox.value = !showChatBox.value
    })
  })
  answer.value.content = ''
}

const answerComment = () => {}

const formattedPostedAt = computed(() => {
  const date = new Date(props.comment.postedAt)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear().toString().slice(-2)
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')
  return `${day}/${month}/${year} ${hours}:${minutes}`
})
const comment_keep = ref<CommentInfoDTO | null>(null)

CommentService.getComment(Number(props.comment.id)).then((response) => {
   {
    comment_keep.value = response.data[0]; // Assuming you want to access the first element
  }
}).catch(error => {
  console.log(error);
});

function editComment() {
    CommentService.editComment(comment_edit.value)
    .then((response) => {
      console.log(response.data);
      showChatBoxEdit.value = !showChatBoxEdit.value
      comment_edit.value.commentContent=''
      instance?.emit('comment-edited')
      // Perform any necessary actions after editing the comment
    });
}
</script>
