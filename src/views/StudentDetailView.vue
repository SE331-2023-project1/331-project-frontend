<template>
    <div>
        <h1 class="text-4xl mt-5 font-bold text-gray-700"> Student Detail </h1>
    </div>
<div class="flex">
<div class="flex card w-96 bg-base-100 shadow-xl mt-5">
  <figure class="px-10 pt-10">
    <img src="https://media.discordapp.net/attachments/1102521841416949850/1163518158435536966/f02bed84317f6e41a5b0118348173512.png?ex=653fddba&is=652d68ba&hm=b43f3c2e84b66e3e721f9854fd84d1fbc4b248e829fa4439b6654fa3931f158b&=&width=1016&height=1016" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-left text-left">
    <h2 class="card-title"> {{ student?.name }} {{ student?.surname }} </h2>
    <p class="text-gray-400">{{ student?.studentID }}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Comment</button>
    </div>
  </div>
</div>

<div class="card w-full h-full bg-base-100 shadow-xl mt-5 ml-5 mr-10">
  <figure class="px-2 pt-2">
  </figure>
  <div class="card-body items-left text-left">
    <h2 class="card-title"> Course List </h2>
    <div v-for="course in student?.courses" :key="course.id">
            <div>
    <span class="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{course.courseID}} {{course.name}} 
    <p> {{ course.description }}</p>
    </span>
  </div>
    </div>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import type { Ref } from 'vue'
    import type { StudentInfo } from '@/student';
    import StudentService from '@/services/StudentService';
    const student = ref<StudentInfo | null>(null)
    const props = defineProps({
        id: String
    })
    StudentService.getStudentByID(Number(props.id)).then((response) => {
    student.value = response.data
    }).catch(error => {
        console.log(error)
    })
</script>