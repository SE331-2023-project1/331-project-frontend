<template>
  <!-- component -->
  <div class="min-h-screen h-10 bg-white flex">
    <div class="w-full mt-7 max-w-6xl">
      
        <div class="bg-white rounded-xl shadow-xl border ">
            <div class="px-8 py-4 text-gray-700 text-3xl font-bold shadow-xl shadow-gray-200  border-red-400">Edit Information</div>
            <form @submit.prevent="edit" name="advisor_application" id="advisor_application" action="" class="py-4 px-8">
              <div class="mb-4">
                      <label class="block text-gray-600 text-sm font-bold mb-2" for="advisor_name">Advisor Name:</label>
                      <input v-model="advisor.name" :placeholder="advisor_keep?.name" class="border rounded w-full py-1 px-3 text-gray-700 border-gray-300" type="text" name="advisor_name" id="advisor_name" >
                  </div>
                  <div class="mb-4">
                      <label class="block text-gray-600 text-sm font-bold mb-2" for="advisor_name">Advisor Surname:</label>
                      <input v-model="advisor.surname" :placeholder="advisor_keep?.surname" class="border rounded w-full py-2 px-3 text-gray-700 border-gray-300" type="text" name="advisor_surname" id="advisor_surname">
                  </div>
                  <div class="mb-4">
                      <label class="block text-gray-600 text-sm font-bold mb-2" for="course_name">Department:</label>
                      <input v-model="advisor.department" :placeholder="advisor_keep?.department" class="border rounded w-full py-2 px-3 text-gray-700 border-gray-300" type="text" name="course_name" id="department">
                      <p id="error_creater_id"></p>
                  </div>
                  <div class="mb-4">
                      <label class="block text-gray-600 text-sm font-bold mb-2" for="course_name">academicPosition:</label>
                      <input v-model="advisor.academicPosition" :placeholder="advisor_keep?.academicPosition" class="border rounded w-full py-2 px-3 text-gray-700 border-gray-300" type="text" name="course_name" id="academicPosition">
                      <p id="error_creater_id"></p>
                  </div>
                  <div class="mb-4">
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="course_name">Add Image:</label>
                      <ImageUpload v-model="advisor.images" />
                      <!-- <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="default_size">Default size</label>
                <input class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="default_size" type="file"> -->
               
                </div>
                <div class="mb-4 w-20 ml-auto">
                <button type="submit" class="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 rounded hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-600 transition duration-300">edit</button>
                </div>
            </form>
        </div>
    </div>
</div>

</template>
<script setup lang="ts">
import type { AdvisorInfo } from '@/advisor';
import { ref } from 'vue';
import AdvisorService from '@/services/AdvisorService';
import { useMessageStore } from '@/stores/message'
import { useRouter } from 'vue-router';
import ImageUpload from '@/components/ImageUpload.vue';

const store = useMessageStore()
const router = useRouter()
const props = defineProps({
        id: String
    })

const advisor = ref<AdvisorInfo>({
    id: 0,
    name: '',
    surname: '',
    department: '',
    images: [],
    academicPosition: '',
    advisees: [{ id: 1,name: '',studentID:'',surname: '',images: []}],
    file: []
  })

  const advisor_keep = ref<AdvisorInfo | null>(null)

  AdvisorService.getAdvisorByID(Number(props.id)).then((response) => {
    advisor_keep.value = response.data
    }).catch(error => {
        console.log(error)
    })

  function edit() {
  AdvisorService.edit(Number(props.id),advisor.value)
    .then((response) => {
      console.log(response.data);
      router.push({
        name: 'advisor-detail',
        params: { id: response.data.id }
      });
      store.updateMessage('You have successfully edited the advisor details for ' + response.data.name);
      setTimeout(() => {
        store.resetMessage();
      }, 3000);
    })
    .catch(() => {
      router.push({ name: 'network-error' });
    });
}



</script>