<template>
  <!-- component -->
  <div class="min-h-screen h-10 bg-white flex">
    <div class="w-full max-w-6xl">
        <div class="bg-white rounded shadow-xl">
            <div class="px-8 py-4 text-gray-700 text-3xl font-bold border-b-2 border-red-400">Add Student</div>
            <form @submit.prevent="saveStudent" name="student_application" id="student_application" action="" class="py-4 px-8">
                <div class="mb-4">
                    <label class="block text-gray-600 text-sm font-bold mb-2" for="student_id">Student ID:</label>
                    <input v-model="student.studentID" class="border rounded w-full py-2 px-3 text-gray-700 border-gray-300" type="text" name="student_id" id="student_id" placeholder="Enter Student ID">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-600 text-sm font-bold mb-2" for="student_name">Student Name:</label>
                    <input v-model="student.name" class="border rounded w-full py-1 px-3 text-gray-700 border-gray-300" type="text" name="student_name" id="student_name" placeholder="Enter Student Name">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-600 text-sm font-bold mb-2" for="student_name">Student Surname:</label>
                    <input v-model="student.surname" class="border rounded w-full py-2 px-3 text-gray-700 border-gray-300" type="text" name="student_name" id="student_name" placeholder="Enter Student Surname">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-600 text-sm font-bold mb-2" for="course_name">Department:</label>
                    <input v-model="student.department" class="border rounded w-full py-2 px-3 text-gray-700 border-gray-300" type="text" name="course_name" id="department" placeholder="Enter Your Department">
                    <p id="error_creater_id"></p>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-600 text-sm font-bold mb-2" for="course_name">Advisor:</label>
                    <!-- <input class="border rounded w-full py-2 px-3 text-gray-700" type="text" name="course_name" id="course_name" value="" placeholder="Enter Your Department"> -->
                    <!-- <BaseSelect v-model="student.advisor" label="Advisor" :options="advisors" /> -->
                    <select v-model="student.advisor" class="border rounded w-full py-2 px-3 text-gray-700 border-gray-300" type="select" name="advisor" id="advisor" >
                      <option v-for="advisor in advisors" :key="advisor.id" :value="advisor">{{ advisor.name }}</option>
                    </select>
                    <p id="error_creater_id"></p>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="course_name">Add Image:</label>
                    <ImageUpload v-model="student.images" />
                    <!-- <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="default_size">Default size</label>
              <input class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="default_size" type="file"> -->

                </div>
                <div class="mb-4 w-20 ml-auto">
                <button type="submit" class="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 rounded hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-600 transition duration-300">ADD</button>
                </div>
            </form>
        </div>
    </div>
</div>

</template>
<script setup lang="ts">
import type { StudentInfo } from '@/student';
import { ref } from 'vue';
import StudentService from '@/services/StudentService';
import { useMessageStore } from '@/stores/message'
import { useRouter } from 'vue-router';
import { type StudentAdvisor } from '@/student';
import AdvisorService from '@/services/AdvisorService';
import ImageUpload from '@/components/ImageUpload.vue';

const store = useMessageStore()

const router = useRouter()

const student = ref<StudentInfo>({
  id: 0,
  studentID :'',
  name: '',
  surname: '',
  department: '',
  images: [],
  advisor: { id: 0, academicPosition: '' ,name: '' ,surname: '' ,images: [] ,department: '' },
  courses: [{ id: 1, name: '' ,courseID:'' ,description:'' }],
})
const advisors = ref<StudentAdvisor[]>([])
AdvisorService.getAdvisors()
  .then((response) => {
    advisors.value = response.data
  })
  .catch(() => {
    router.push({ name: 'network-error' })
  })
function saveStudent() {
  console.log(student.value)
    StudentService.saveStudent(student.value)
    .then((response) => {
      console.log(response.data)
      router.push({
        name: 'student-detail',
        params: { id: response.data.id }
      })
      store.updateMessage('You are successfully add a new event for' + response.data.name)
      setTimeout(() => {
        store.resetMessage()
      }, 3000)
    })
    .catch(() => {
      router.push({ name: 'network-error' })
    })
}


</script>