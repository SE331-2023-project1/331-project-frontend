<template>
  <section class="bg-white dark:bg-gray-900 py-5 lg:py-5 antialiased mr-12">
    <div class="max-w-full mr-12 mx-auto rounded-br-2xl shadow-2xl rounded-tl-2xl p-10 bg-gray-700">
      <div class="flex justify-between items-center">
        <h2 class="text-lg lg:text-2xl font-bold text-white dark:text-white">Comment</h2>
      </div>
      <form @submit.prevent="saveComment" class="mb-10">
        <div
          class="py-2 px-4 mb-4 mt-3 bg-white rounded-lg rounded-t-lg border-2 h-32 border-gray-200 dark:bg-gray-800 dark:border-gray-700"
        >
          <label for="comment" class="sr-only">Your comment</label>
          <input
            v-model="comment.commentContent"
            id="comment"
            class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder="Comment here.."
          />
        </div>
        <button
          type="submit"
          class="bg-red-500 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 float-right"
        >
          Post comment
        </button>
      </form>
    </div>
  </section>
  <CommentCard v-for="comment in respone_comment" :key="comment.id" :comment="comment">
    </CommentCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CommentCard from '@/components/CommentCard.vue'
// Replace 'CommentService' with your actual service implementation
import CommentService from '@/services/CommentService'
// Replace 'useMessageStore' with your actual store implementation
import { useMessageStore } from '@/stores/message'
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'
import type { CommentInfo } from '@/comment'
import type { CommentInfoDTO } from '@/comment'
import { useAuthStore } from '@/stores/auth'


const authUser = useAuthStore()
const store = useMessageStore()
const router = useRouter()
const prop = defineProps({
  id: {
    type: Number
  }
})
const comment = ref<CommentInfo>({
  id: 0,
  commentContent: '',
  advisorId: authUser.getId
})

const respone_comment = ref<CommentInfoDTO[]>([])
const showCommentCard = ref(false)
 // Initialize showCommentCard with ref
CommentService.getComment(Number(prop.id)).then((response) => {
  respone_comment.value = response.data
  console.log(respone_comment.value)
})

// const respone_answer = ref<AnswerInfo[]>([])
// AnswerService.getAnswer(Number(prop.id)).then((response) => {
//     respone_answer.value = response.data
//   console.log(respone_answer.value)
// })

const saveComment = () => {
  console.log('HeHEEEEE ' + authUser.getId)
  console.log(comment.value)
  CommentService.saveComment(Number(prop.id), comment.value)
    .then((response) => {
      // Add this line to show the CommentCard when the comment is successfully saved
      showCommentCard.value = true
      console.log(response.data)
      comment.value.commentContent = ''
      CommentService.getComment(Number(prop.id)).then((response) => {
        respone_comment.value = response.data
        console.log(respone_comment.value)
      })
    })
    .catch(() => {
      router.push({ name: 'network-error' })
    })
}
</script>
