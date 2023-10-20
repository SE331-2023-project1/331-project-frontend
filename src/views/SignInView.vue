<template>
	<!-- component -->
	<div class="min-h-screen py-6 flex flex-col justify-center sm:py-12 mr-52 z-50">
	<div class="max-w-screen-xl mx-auto">
    <div class="relative py-4">
      <div class="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-500 transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl shadow-2xl"></div>
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20  sm:px-20">
        <div class="max-w-md mx-auto">
          <div class="flex justify-center">
            <div class="rounded-full">
              <svg class="h-8 w-8 rounded-full px-1.5 shadow-xl shadow-gray-300 text-white bg-gradient-to-r from-red-400 to-orange-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="6" cy="19" r="2" />
                <circle cx="18" cy="5" r="2" />
                <path d="M12 19h4.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h3.5" />
              </svg>
            </div>
            <h1 class="ml-2 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 ">
              SSLT
            </h1>
          </div>
          <div>
            <h1 class="text-2xl font-bold mt-5 text-gray-600">SIGN IN YOUR ACCOUNT</h1>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <form @submit.prevent="onSubmit">
                <div class="relative">
                  <input autocomplete="off" v-model="username" :class="{ 'border-rose-500': errors['username'] }" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 border-t-white border-l-white border-r-white text-gray-900 focus:outline-none focus:border-rose-500" placeholder="Username" />
                  <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
                  <span v-if="errors['username']" class="text-red-500">{{ errors['username'] }}</span>
                </div>
                <div class="relative">
                  <input autocomplete="off" v-model="password" :class="{ 'border-rose-500': errors['password'] }" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 border-t-white border-l-white border-r-white text-gray-900 focus:outline-none focus:border-rose-500 mt-8" placeholder="Password" />
                  <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm mt-8">Password</label>
                  <span v-if="errors['password']" class="text-red-500">{{ errors['password'] }}</span>
                </div>
					<RouterLink :to="{ name: 'Signup'}" >
                  <label class="text-xs font-semibold text-red-600 underline">Don't have an account? Sign Up</label>
				</RouterLink>
                <div class="flex justify-center mt-6">
                  <button type="submit" class="w-full font-semibold max-w-md bg-gradient-to-r from-red-400 to-orange-500 text-sm text-white rounded-md px-5 py-2">LOGIN</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </template>
  
  <script setup lang="ts">
  import * as yup from 'yup';
  import { useField, useForm } from 'vee-validate';
  import { useAuthStore } from '@/stores/auth';
  import router from '@/router';
  import { useMessageStore } from '@/stores/message';
  
  const messageStore = useMessageStore();
  const authStore = useAuthStore();
  
  const validationSchema = yup.object({
	username: yup.string().required('The username is required'),
	password: yup.string().required('The password is required'),
  });
  
  const { errors, handleSubmit } = useForm({
	validationSchema,
	initialValues: {
	  username: '',
	  password: '',
	},
  });
  
  const { value: username } = useField<string>('username');
  const { value: password } = useField<string>('password');
  
  const onSubmit = handleSubmit((values) => {
	authStore.login(values.username, values.password)
	.then(() => {
		router.push({name: 'home'})
	})
	.catch((err) => {
		messageStore.updateMessage('Could not login')
		setTimeout(() => {
			messageStore.resetMessage()
		}, 3000)
	})
  })
  </script>
  