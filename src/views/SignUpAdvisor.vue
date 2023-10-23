<template>
    <!-- Component -->
    <div class="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-500 transform shadow-2xl">
      <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:p-6">
        <div class="max-w-md w-full h-full p-10 border rounded-br-3xl rounded-tl-3xl bg-white">
          <form @submit.prevent="onSubmit">
            <div class="flex justify-center">
              <div class="rounded-full">
                <svg
                  class="h-8 w-8 rounded-full px-1.5 shadow-xl shadow-gray-300 text-white bg-gradient-to-r from-red-400 to-orange-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="6" cy="19" r="2" />
                  <circle cx="18" cy="5" r="2" />
                  <path d="M12 19h4.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h3.5" />
                </svg>
              </div>
              <h1
                class="ml-2 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500"
              >
                SSLT
              </h1>
            </div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              ADD ADVISOR
            </h2>
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="mb-5">
                  <label for="email" class="sr-only">Email</label>
                  <input
                    v-model="email"
                    :class="{ 'border-red-500': errors['email'] }"
                    id="email"
                    name="email"
                    type="text"
                    autocomplete="off"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                    placeholder="Email Address"
                  />
                  <span v-if="errors['email']" class="text-red-500 text-sm">{{
                    errors['email']
                  }}</span>
                </div>
                <div class="mb-5">
                  <label for="username" class="sr-only">Username</label>
                  <input
                    v-model="username"
                    :class="{ 'border-red-500': errors['username'] }"
                    id="email"
                    name="email"
                    type="text"
                    autocomplete="off"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                    placeholder="Username"
                  />
                  <span v-if="errors['username']" class="text-red-500 text-sm">{{
                    errors['username']
                  }}</span>
                </div>
                <div class="mb-5">
                  <label for="firstname" class="sr-only">Firstname</label>
                  <input
                    v-model="firstname"
                    :class="{ 'border-red-500': errors['firstname'] }"
                    id="firstname"
                    name="firstname"
                    type="text"
                    autocomplete="off"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                    placeholder="Firstname"
                  />
                  <span v-if="errors['firstname']" class="text-red-500 text-sm">{{
                    errors['firstname']}}</span>
                </div>
                <div class="mb-5">
                  <label for="lastname" class="sr-only">Lastname</label>
                  <input
                    v-model="lastname"
                    :class="{ 'border-red-500': errors['lastname'] }"
                    id="lastname"
                    name="lastname"
                    type="text"
                    autocomplete="off"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                    placeholder="lastname"
                  />
                  <span v-if="errors['lastname']" class="text-red-500 text-sm">{{
                    errors['lastname']}}</span>
                </div>
                <div class="mb-5">
                  <label for="password" class="sr-only">Password</label>
                  <input
                    v-model="password"
                    :class="{ 'border-red-500': errors['password'] }"
                    id="password"
                    name="password"
                    type="text"
                    autocomplete="off"
                    required
                    class="peer rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                    placeholder="password"
                  />
                  <span v-if="errors['password']" class="text-red-500 text-sm">{{
                    errors['password']}}</span>
                </div>
                <div class="flex justify-center">
                  <button
                    type="submit"
                    class="w-full mt-5 font-semibold max-w-md bg-gradient-to-r from-red-400 to-orange-500 text-sm text-white rounded-md px-5 py-2"
                  >
                    CREATE ADVISOR
                  </button>
                </div>
           
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import * as yup from 'yup'
  import { useField, useForm } from 'vee-validate'
  import { useAuthStore } from '@/stores/auth'
  import { useRouter } from 'vue-router'
  import { useMessageStore } from '@/stores/message'
  
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
      username: '',
      firstname: '',
      lastname: '',
      password: ''
    }
  })
  
  const { value: email } = useField<string>('email')
  const { value: username } = useField<string>('username')
  const { value: firstname } = useField<string>('firstname')
  const { value: lastname } = useField<string>('lastname')
  const { value: password } = useField<string>('password')
  
  const onSubmit = handleSubmit((values) => {
    authStore
      .advisorRegister(values.email, values.username, values.firstname, values.lastname, values.password)
      .then(() => {
        router.push({ name: 'advisor' })
      })
      .catch((err) => {
        messageStore.updateMessage('Could not login')
        setTimeout(() => {
          messageStore.resetMessage()
        }, 3000)
      })
    })
  
  </script>
  