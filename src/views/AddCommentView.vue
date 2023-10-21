<template>
  <section class="bg-white dark:bg-gray-900 py-8 lg:py-10 antialiased">
    <div class="max-w-full mr-12 mx-auto px-10 rounded-br-2xl rounded-tl-2xl p-10 bg-gray-700">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-lg lg:text-2xl font-bold text-white dark:text-white">Comment</h2>
      </div>
      <form @submit.prevent="submitForm" class="mb-10">
        <div
          class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border-2 h-32 border-gray-200 dark:bg-gray-800 dark:border-gray-700"
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
  <div class="">
    <CommentCard v-if="comment" :key="comment.id" :comment="comment"></CommentCard>
  </div>
</template>
<script setup lang="ts">
import type { CommentInfo } from '@/comment';
import CommentService from '@/services/CommentService';
import { useMessageStore } from '@/stores/message'
  import { useRouter } from 'vue-router';
import { ref, toValue } from 'vue'
import CommentCard from '@/components/CommentCard.vue';

const store = useMessageStore()
  
const router = useRouter()

const prop = defineProps({
    id:{
        type: Number
    }
})
  const comment = ref<CommentInfo>({
    id: 0,
    commentContent: '',
    postedAt: '',
  })
  const submitForm = () => {
    console.log(comment.value)
    CommentService.saveComment(Number(prop.id),comment.value)
  }
  function saveComment() {
    CommentService.saveComment(Number(prop.id),comment.value)
      .then((response) => {
        console.log(response.data)
        router.push({
          name: 'add-comment',
          params: { id: response.data.id }
        })
        store.updateMessage('You are successfully add a new event for' + response.data)
        setTimeout(() => {
          store.resetMessage()
        }, 3000)
      })
      .catch(() => {
        router.push({ name: 'network-error' })
      })
  }
</script>
