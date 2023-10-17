<template>
  <div class="flex items-center">
    <h1 class="text-4xl mt-5 font-bold text-gray-700">Student List</h1>
    <div class="search flex justify-center items-center flex-1 mt-5">
      <form class="max-w-[600px] w-full">
        <div class="relative">
          <input
            type="text"
            name="q"
            class="w-full border h-12 shadow p-4 rounded-full"
            placeholder="search"
          />
          <button type="submit">
            <svg
              class="text-gray-400 h-5 w-5 absolute top-3.5 right-3 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style="enable-background: new 0 0 56.966 56.966"
              xml:space="preserve"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
              ></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
    <div class="ml-auto">
      <button
        @click="showForm"
        type="button"
        class="text-white bg-red-500 hover:bg-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-10 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none mt-6"
      >
        + Add Student
      </button>
    </div>
  </div>
  <div class="">
    <StudentCard v-for="student in students" :key="student.id" :student="student"></StudentCard>
  </div>
  <div class="flex justify-center mt-5">
    <div class="flex items-center">
        <RouterLink
            :to="{ name: 'home', query: { page: page - 1 } }"
            rel="prev"
            v-if="page != 1"
            id="page-prev"
            class="join-item items-center btn mr-10 hover:bg-gray-500"
        >
            «
        </RouterLink>

        <button class="join-item btn text-center hover:bg-gray-500">Page {{ page }} of {{ totalPages }}</button>
        <div class="mr-10">
        <RouterLink
            :to="{ name: 'home', query: { page: page + 1 } }"
            rel="next"
            v-if="hasNextPage"
            id="page-next"
            class="join-item text-center btn ml-10  hover:bg-gray-500"
        >
            »
        </RouterLink>
      </div>
    </div>
</div>

</template>

<script setup lang="ts">
import Swal from 'sweetalert2'
import { type StudentInfo } from '@/student'
import StudentService from '@/services/StudentService'
import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import type { AxiosResponse } from 'axios'
import { useRouter } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'
import NProgress from 'nprogress'
import StudentCard from '@/components/StudentCard.vue'

const router = useRouter()
const students: Ref<Array<StudentInfo>> = ref([])
const totalStudent = ref<number>(0)
let studentID: string | null = null;
let name: string | null = null;
let surname: string | null = null;
const totalPages = computed(() => Math.ceil(totalStudent.value / 3))
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})
const hasNextPage = computed(() => {
  return props.page.valueOf() < totalPages.value
})
NProgress
StudentService.getStudent(3, props.page)
  .then((response: AxiosResponse<StudentInfo[]>) => {
    students.value = response.data
    console.log('hello')
    console.log(students.value)
    totalStudent.value = response.headers['x-total-count']
  })
  .catch(() => {
    router.push({ name: 'NetworkError' })
  })
onBeforeRouteUpdate((to, from, next) => {
  const toPage = Number(to.query.page)
  StudentService.getStudent(3, toPage)
    .then((response: AxiosResponse<StudentInfo[]>) => {
      students.value = response.data
      totalStudent.value = response.headers['x-total-count']
      next()
    })
    .catch(() => {
      next({ name: 'NetworkError' })
    })
})
const showForm = () => {
  Swal.fire({
    title: 'Add new student',
    html:
      '<input id="swal-input1" class="swal2-input" placeholder="Student ID">' +
      '<input id="swal-input2" class="swal2-input" placeholder="Name">' +
      '<input id="swal-input3" class="swal2-input" placeholder="Surname">',
    showCancelButton: true,
    confirmButtonText: 'Submit',
    showLoaderOnConfirm: true,
    preConfirm: () => {
      const studentIDInput = document.getElementById('swal-input1') as HTMLInputElement;
      const nameInput = document.getElementById('swal-input2') as HTMLInputElement;
      const surnameInput = document.getElementById('swal-input3') as HTMLInputElement;

      if (!studentIDInput || !nameInput || !surnameInput) {
        Swal.showValidationMessage('Input fields not found');
        return false;
      }

      const studentIDValue = studentIDInput.value;
      const nameValue = nameInput.value;
      const surnameValue = surnameInput.value;

      if (!studentIDValue || !nameValue || !surnameValue) {
        Swal.showValidationMessage('Please fill out all the fields');
        return false;
      }

      studentID = studentIDValue;
      name = nameValue;
      surname = surnameValue;

      return {
        studentID: studentID,
        name: name,
        surname: surname
      };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      if (studentID && name && surname) {
        Swal.fire('Add success', '', 'success')
        console.log(studentID);
        console.log(name);
        console.log(surname);
        const newStudent: StudentInfo = {
          id: 0,
          studentID: studentID,
          name: name,
          surname: surname,
          department:'',
          images: [],
          advisor: {id: 0,academicPosition:'',name: '',surname: '',images: [],department: ''},
          courses: [{id:0,name:'',courseID:'',description:''}],
        }
        StudentService.saveStudent(newStudent)
      }
    }
  });
};
</script>

<style scoped></style>
