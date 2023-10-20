<template>
    <div class="flex items-center">
      <h1 class="text-4xl mt-5 font-bold text-gray-700">Advisor List</h1>
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
        <RouterLink
            :to="{ name: 'add-advisor' }"
        type="button"
        class="text-white bg-gradient-to-r from-red-500 to-orange-500 hover:bg-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-10 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none mt-6"
      >
        + Add Advisor
        </RouterLink>
    </div>
    
    </div>
    <div class="">
      <AdvisorCard v-for="advisor in advisors" :key="advisor.id" :advisor="advisor"></AdvisorCard>
    </div>
    <div class="flex justify-center mt-5">
      <div class="flex items-center">
          <RouterLink
              :to="{ name: 'advisor', query: { page: page - 1 } }"
              rel="prev"
              v-if="page != 1"
              id="page-prev"
              class="join-item items-center btn bg-slate-300 hover:bg-gray-500"
          >
              «
          </RouterLink>
  
          <div class="join-item btn bg-white text-center hover:bg-gray-500">Page {{ page }} of {{ totalPages }}</div>
          <div class="mr-10">
          <RouterLink
              :to="{ name: 'advisor', query: { page: page + 1 } }"
              rel="next"
              v-if="hasNextPage"
              id="page-next"
              class="join-item text-center btn bg-slate-300 hover:bg-gray-500"
          >
              »
          </RouterLink>
        </div>
      </div>
  </div>
  
  </template>
  
  <script setup lang="ts">
  import Swal from 'sweetalert2'
  import { type AdvisorInfo } from '@/advisor'
  import AdvisorService from '@/services/AdvisorService'
  import type { Ref } from 'vue'
  import { computed, ref } from 'vue'
  import type { AxiosResponse } from 'axios'
  import { useRouter } from 'vue-router'
  import { onBeforeRouteUpdate } from 'vue-router'
  import NProgress from 'nprogress'
  import AdvisorCard from '@/components/AdvisorCard.vue'
  
  const router = useRouter()
  const advisors: Ref<Array<AdvisorInfo>> = ref([])
  const totalAdvisor = ref<number>(0)
  const totalPages = computed(() => Math.ceil(totalAdvisor.value / 3))
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
  AdvisorService.getAdvisor(3, props.page)
    .then((response: AxiosResponse<AdvisorInfo[]>) => {
      advisors.value = response.data
      console.log('hello')
      console.log(advisors.value)
      totalAdvisor.value = response.headers['x-total-count']
    })
    .catch(() => {
      router.push({ name: 'NetworkError' })
    })
  onBeforeRouteUpdate((to, from, next) => {
    const toPage = Number(to.query.page)
    AdvisorService.getAdvisor(3, toPage)
      .then((response: AxiosResponse<AdvisorInfo[]>) => {
        advisors.value = response.data
        totalAdvisor.value = response.headers['x-total-count']
        next()
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  })
  const showForm = () => {
  };
  </script>
  
  <style scoped></style>
  