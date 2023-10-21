<template>
	<!-- Component -->
	<div class="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-500 transform  shadow-2xl">
	<div class="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
		<div class="max-w-md w-full h-full p-10 border rounded-br-3xl rounded-tl-3xl bg-white">
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
		  <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
			SIGN IN YOUR ACCOUNT
		  </h2>
		</div>
		<form class="mt-8 space-y-6" @submit.prevent="onSubmit">
		  <div class="rounded-md shadow-sm -space-y-px">
			<div>
			  <label for="email" class="sr-only">Username</label>
			  <input v-model="username" :class="{ 'border-red-500': errors['username'] }" id="email" name="email" type="text" autocomplete="off" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm" placeholder="Username">
			  <span v-if="errors['username']" class="text-red-500 text-sm">{{ errors['username'] }}</span>
			</div>
			<div>
			  <label for="password" class="sr-only">Password</label>
			  <input v-model="password" :class="{ 'border-red-500': errors['password'] }" id="password" name="password" type="password" autocomplete="off" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm mt-8" placeholder="Password">
			  <span v-if="errors['password']" class="text-red-500 text-sm">{{ errors['password'] }}</span>
			</div>
		  </div>
  
		  <div class="flex items-center justify-between">
			<div class="flex items-center">
			  <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded">
			  <label for="remember_me" class="ml-2 block text-sm text-gray-900">
				Remember me
			  </label>
			</div>
  
			<div class="text-sm">
			  <a href="#" class="font-medium text-red-600 hover:text-red-500">
				Forgot your password?
			  </a>
			</div>
		  </div>
  
		  <div>
			<button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-400 to-orange-500 hover:from-red-500 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-8">
			  LOGIN
			</button>
		  </div>
		</form>
		<RouterLink :to="{ name: 'Signup'}" class="text-sm text-center">
		  <p class="text-gray-600 mt-5">Don't have an account? <a href="#" class="font-medium text-red-600 hover:text-red-500">Sign Up</a></p>
		</RouterLink>
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
  