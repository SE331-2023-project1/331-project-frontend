<template>
  <!-- component -->
  <div class="min-h-screen h-10 bg-white  flex">
    <div class="w-full mt-7 max-w-6xl">
        <div class="bg-white rounded-xl shadow-xl border ">
            <div class="px-8 py-4 text-white rounded-t-xl text-3xl font-bold shadow-xl shadow-gray-200  border-red-400 bg-gray-700">Edit Information</div>
            <form @submit.prevent="submitForm" name="student_application" id="student_application" action="" class="py-4 px-8">
                <div class="mb-4">
                    <label class="block text-gray-600 text-sm font-bold mb-2" for="student_id">Student ID:</label>
                    <input v-model="student.studentID" :placeholder="student_keep?.studentID" class="border rounded w-full py-2 px-3 text-gray-700 border-gray-300" type="text" name="student_id" id="student_id" >
                </div>
                <div class="mb-4">
                    <label class="block text-gray-600 text-sm font-bold mb-2" for="student_name">Student Name:</label>
                    <input v-model="student.name" :placeholder="student_keep?.name" class="border rounded w-full py-1 px-3 text-gray-700 border-gray-300" type="text" name="student_name" id="student_name">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-600 text-sm font-bold mb-2" for="student_name">Student Surname:</label>
                    <input v-model="student.surname" :placeholder="student_keep?.surname" class="border rounded w-full py-2 px-3 text-gray-700 border-gray-300" type="text" name="student_name" id="student_name">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-600 text-sm font-bold mb-2" for="course_name">Department:</label>
                    <input v-model="student.department" :placeholder="student_keep?.department" class="border rounded w-full py-2 px-3 text-gray-700 border-gray-300" type="text" name="course_name" id="department">
                    <p id="error_creater_id"></p>
                </div>
                
                <div v-if="authStore.isAdmin" class="mb-4">
                  <label class="block text-gray-600 text-sm font-bold mb-2" for="advisor">Advisor:</label>

                <select v-model="student.advisor" class="border rounded w-full py-2 px-3 text-gray-700 border-gray-300" type="select" name="advisor" id="advisor" >
                      <option v-for="advisor in advisors" :key="advisor.id" :value="advisor">{{ advisor.name }}</option>
                    </select>
                  </div>

                <!-- <select v-model="student.advisor" class="border rounded w-full py-2 px-3 text-gray-700 border-gray-300" type="select" name="advisor" id="advisor" >
                      <option v-for="advisor in advisors" :key="advisor.id" :value="advisor">{{ advisor.name }}</option>
                    </select> -->

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="course_name">Add Image:</label>
                    <ImageUpload v-model="student.images" />
                    <!-- <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="default_size">Default size</label>
              <input class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="default_size" type="file"> -->

                </div>
                <div class="mb-4 w-20 ml-auto">
                <button type="submit" class="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 rounded hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-600 transition duration-300">Edit</button>
                </div>     
            </form>
        </div>
    </div>
</div>

</template>
<script setup lang="ts">
import type { StudentInfo, StudentAdvisor } from '@/student';
import { ref } from 'vue';
import StudentService from '@/services/StudentService'; // Import StudentService correctly
import AdvisorService from '@/services/AdvisorService'; // Import AdvisorService correctly
import { useMessageStore } from '@/stores/message'; // Check the location of useMessageStore
import { useRouter } from 'vue-router'; // Check the location of useRouter
import ImageUpload from '@/components/ImageUpload.vue'; // Check the location of ImageUpload component
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const store = useMessageStore();
const router = useRouter();
const props = defineProps({
  id: String
});

const student = ref<StudentInfo>({
  id: 0,
  studentID: '',
  name: '',
  surname: '',
  department: '',
  images: [],
  advisor: { id: 0, academicPosition: '', name: '', surname: '', images: [], department: '' },
  courses: [{ id: 1, name: '', courseID: '', description: '' }]
});

const student_keep = ref<StudentInfo | null>(null);
const advisors = ref<StudentAdvisor[]>([]);

// Fetch advisors
AdvisorService.getAdvisors()
  .then((response) => {
    advisors.value = response.data;
  })
  .catch(() => {
    router.push({ name: 'network-error' });
  });

// Fetch student by ID
StudentService.getStudentByID(Number(props.id))
  .then((response) => {
    student_keep.value = response.data;
  })
  .catch((error) => {
    console.log(error);
  });

// Function to edit student information
function editStudentInformation() {
  console.log(student.value);
  StudentService.editStudentInformation(Number(props.id), student.value)
    .then((response) => {
      console.log(response.data);
      router.push({
        name: 'student-detail',
        params: { id: response.data.id }
      });
      store.updateMessage('You have successfully edited the student details for ' + response.data.name);
      setTimeout(() => {
        store.resetMessage();
      }, 3000);
    })
    .catch(() => {
      router.push({ name: 'network-error' });
    });
}

// Function to edit student advisor
function editStudentAdvisor() {
  console.log(student.value);
  StudentService.editStudentAdvisor(Number(props.id), student.value)
    .then((response) => {
      console.log(response.data);
      router.push({
        name: 'student-detail',
        params: { id: response.data.id }
      });
      store.updateMessage('You have successfully edited the student details for ' + response.data.name);
      setTimeout(() => {
        store.resetMessage();
      }, 3000);
    })
    .catch(() => {
      router.push({ name: 'network-error' });
    });
}
function submitForm() {
  editStudentInformation();
  editStudentAdvisor();
}

</script>
