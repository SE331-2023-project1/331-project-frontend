<template>
  <!-- <RouterLink :to="{ name: 'student-detail', params: { id: student?.id } }"> -->
    <div class="card card-side bg-base-100 shadow-xl p-2 mt-4 mr-10 hover:shadow-gray-100">
      <figure class="px-5">
        <img src="https://media.discordapp.net/attachments/1102521841416949850/1163518158435536966/f02bed84317f6e41a5b0118348173512.png?ex=653fddba&is=652d68ba&hm=b43f3c2e84b66e3e721f9854fd84d1fbc4b248e829fa4439b6654fa3931f158b&=&width=1016&height=1016" class="w-40 h-40"/>
      </figure>
      <div class="card-body">
        <h2 class="card-title text-gray-600"> {{ student?.name }} {{ student?.surname }}</h2>
        <h3 class="text-gray-400"> {{ student?.studentID }}</h3>
        <h4 class="text-gray-400"> {{ student?.course }}</h4>
        <div class="card-actions justify-end">
          <button class="btn text-white bg-gray-700 hover:bg-gray-400">View Detail</button>
        </div>
      </div>
    </div>
  <!-- </RouterLink> -->
</template>
<script setup lang="ts">
import type { StudentInfo } from '@/student'
import type { PropType } from 'vue'
const props = defineProps({
  student: {
    type: Object as PropType<StudentInfo>,
    require: true
  }
})
</script>

<style scoped></style>
