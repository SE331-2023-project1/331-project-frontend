<template>
  <!-- component -->
  
  <div class="min-h-screen bg-white py-6 flex flex-col justify-center mr-10">
    <div class="relative ">
      <div
        class="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
      </div>
      
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-5">
        <form @submit.prevent="onSubmit">
          <div class="max-w-md mx-auto">
          <div class="flex ">
            <div class="rounded-full">
            <svg class="h-8 w-8 rounded-full px-1.5 shadow-xl shadow-gray-300 text-white bg-gradient-to-r from-red-400 to-orange-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="6" cy="19" r="2" />  <circle cx="18" cy="5" r="2" />  <path d="M12 19h4.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h3.5" /></svg>
          </div>
            <h1 class="ml-2 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 "> SSLT </h1>
          </div>
          <div>
            <h1 class="text-2xl font-bold mt-5 text-gray-600">CREATE YOUR ACCOUNT</h1>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div class="relative">
                <input 
                autocomplete="off"
                v-model="email" 
                :class="{ 'border-rose-500': errors['email'] }"
                id="email" 
                name="email" 
                type="text" 
                class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 border-t-white border-l-white border-r-white text-gray-900 focus:outline-none focus:borer-rose-500" 
                placeholder="Email Adress" />
                <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm ">Email Adress</label>
              </div>
              <div class="relative">
                <input 
                autocomplete="off" 
                v-model ="username"
                :class="{ 'border-rose-500': errors['username'] }"
                id="username" 
                name="username" 
                type="text" 
                class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 border-t-white border-l-white border-r-white text-gray-900 focus:outline-none focus:borer-rose-500 mt-5" 
                placeholder="Username" />
                <label for="username" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm mt-5">Username</label>
              </div>
              <div class="relative">
                <input 
                autocomplete="off"
                v-model = "firstname" 
                :class="{ 'border-rose-500': errors['firstname'] }"
                id="firstname" 
                name="firstname" 
                type="text" 
                class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 border-t-white border-l-white border-r-white text-gray-900 focus:outline-none focus:borer-rose-500 mt-5" 
                placeholder="First Name" />
                <label for="firstname" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm mt-5">First Name</label>
              </div>
              <div class="relative">
                <input 
                autocomplete="off" 
                v-model = "lastname"
                :class="{ 'border-rose-500': errors['lastname'] }"
                id="lastname" 
                name="lastname" 
                type="text" 
                class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 border-t-white border-l-white border-r-white text-gray-900 focus:outline-none focus:borer-rose-500 mt-5" 
                placeholder="Last Name" />
                <label for="lastname" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm mt-5">Last Name</label>
              </div>
              <div class="relative">
                <input 
                autocomplete="off"
                v-model="password" 
                :class="{ 'border-rose-500': errors['password'] }"
                id="password" 
                name="password" 
                type="password" 
                class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 border-t-white border-l-white border-r-white text-gray-900 focus:outline-none focus:borer-rose-500 mt-5" 
                placeholder="Password" />
                <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm mt-5">Password</label>
              </div>
              
              <div class="ml-80">

                <button type="submit" class="w-full bg-gradient-to-r from-red-400 to-orange-500 text-sm text-white rounded-md px-5 py-2 mt-7">SIGN UP</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message';

const messageStore = useMessageStore()
const router = useRouter()
const authStore = useAuthStore()

const validationSchema = yup.object({
  email: yup.string().required('The email is required'),
  username: yup.string().required('The username is required'),
  firstname: yup.string().required('The firstname is required'),
  lastname: yup.string().required('The lastname is required'),
  password: yup.string().required('The password is required')
})

const { errors, handleSubmit } = useForm({
  validationSchema,
  initialValues: {
    email: '',
    username:'',
    firstname:'',
    lastname:'',
    password: ''
  }
})

const { value: email } = useField<string>('email')
const { value: username } = useField<string>('username')
const { value: firstname } = useField<string>('firstname')
const { value: lastname } = useField<string>('lastname')
const { value: password } = useField<string>('password')

const onSubmit = handleSubmit((values) => {
  authStore.register(values.email, values.username, values.firstname, values.lastname,values.password)
  .then(() => {
    router.push({ name: 'Signin'})
  }).catch((err) => {
    messageStore.updateMessage('Could not login')
    setTimeout(() => {
      messageStore.resetMessage()
    }, 3000)
  })
})

</script>