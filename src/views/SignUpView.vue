<template>
    
    <div class="container mx-auto p-4 bg-white">
        <div class="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up to your account</h2>
    </div>
          <form class="flex flex-col mt-5">
            <input
                type="text"
                name="name"
                class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                placeholder="Name"
            />
            <input
                type="text"
                name="surname"
                class="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                placeholder="Surname"
            />
            <input
                type="email"
                name="email"
                class="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                placeholder="Email address"
            />
            <input
                type="password"
                name="password"
                class="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                placeholder="Password"
            />
            <input
                type="password"
                name="confirm-password"
                class="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                placeholder="Confirm Password"
            />
            <button
                type="submit"
                class="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-red-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
            >
              Register
            </button>
            <div class="flex flex-col items-center mt-5">
              <p class="mt-1 text-xs font-light text-gray-500">
                Register already ?<a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">    Sign in now</a>
                </p>
            </div>
          </form>
        </div>
      </div>
    </template>