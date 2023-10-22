<template>
  <div class="flex">
    <!-- Drawer on the left -->
    <div class="w-1/6 ">
      <nav class="fixed">
      <div class=" drawer lg:drawer-open z-50">
        <input id="my-drawer-2" type="checkbox" class=" drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          <label for="my-drawer-2" class="btn drawer-button lg:hidden mb-5">
            <svg class="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </label>
        </div>
        <div class="drawer-side min-h-screen drop-shadow-3xl shadow-gray-300 rounded-br-6xl">
          <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
          <ul
            v-if="authStore.currentUserName"
            class="menu p-4 w-30 min-h-full bg-red-500 text-white rounded-br-6xl"
          >

          <div class="flex justify-center mb-6 mt-3">
            <div class="rounded-full">
              <svg
                class="h-7 w-7 rounded-full px-1.5 text-red-500 bg-white"
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
              class="ml-2 font-semibold text-xl text-transparent bg-clip-text text-white"
            >
              SSLT
            </h1>
          </div>

            <!-- Sidebar content here -->
            <li class="flex flex-col items-center mt-2">
              <RouterLink
                :to="{ name: 'announcement' }"
              class="inline-flex flex-col items-center p-2 text-gray-900 rounded-lg group"
              >
                <svg
                  class="w-5 h-5 text-white transition duration-75 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path
                    d="M15.133 10.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C4.867 13.018 3 13.614 3 14.807 3 15.4 3 16 3.538 16h12.924C17 16 17 15.4 17 14.807c0-1.193-1.867-1.789-1.867-4.175ZM4 4a1 1 0 0 1-.707-.293l-1-1a1 1 0 0 1 1.414-1.414l1 1A1 1 0 0 1 4 4ZM2 8H1a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2Zm14-4a1 1 0 0 1-.707-1.707l1-1a1 1 0 1 1 1.414 1.414l-1 1A1 1 0 0 1 16 4Zm3 4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2ZM6.823 17a3.453 3.453 0 0 0 6.354 0H6.823Z"
                  />
                </svg>

                <span class="mt-auto text-white">Announce</span>
            </RouterLink>
            </li>
            <li v-if="authStore.isAdmin || authStore.isAdvisor" class="flex flex-col items-center mt-7">
              <RouterLink
                :to="{ name: 'home' }"
                class="inline-flex flex-col items-center p-2 text-gray-900 rounded-lg group"
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <title>IDcard_line</title>
                  <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="User" transform="translate(-624.000000, 0.000000)">
                      <g id="IDcard_line" transform="translate(624.000000, 0.000000)">
                        <path
                          d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                          id="MingCute"
                          fill-rule="nonzero"
                        ></path>
                        <path
                          d="M4,4 C2.89543,4 2,4.89543 2,6 L2,18 C2,19.1046 2.89543,20 4,20 L20,20 C21.1046,20 22,19.1046 22,18 L22,6 C22,4.89543 21.1046,4 20,4 L4,4 Z M4,6 L20,6 L20,18 L4,18 L4,6 Z M10.25,9.75 C10.25,10.7165 9.4665,11.5 8.5,11.5 C7.5335,11.5 6.75,10.7165 6.75,9.75 C6.75,8.7835 7.5335,8 8.5,8 C9.4665,8 10.25,8.7835 10.25,9.75 Z M5,14.5 C5,13.1193 6.11929,12 7.5,12 L9.5,12 C10.8807,12 12,13.1193 12,14.5 L12,15 C12,15.5523 11.5523,16 11,16 C10.4477,16 10,15.5523 10,15 L10,14.5 C10,14.2239 9.77614,14 9.5,14 L7.5,14 C7.22386,14 7,14.2239 7,14.5 L7,15 C7,15.5523 6.55228,16 6,16 C5.44772,16 5,15.5523 5,15 L5,14.5 Z M13,11 C13,10.4477 13.4477,10 14,10 L16,10 C16.5523,10 17,10.4477 17,11 C17,11.5523 16.5523,12 16,12 L14,12 C13.4477,12 13,11.5523 13,11 Z M14,13 C13.4477,13 13,13.4477 13,14 C13,14.5523 13.4477,15 14,15 L18,15 C18.5523,15 19,14.5523 19,14 C19,13.4477 18.5523,13 18,13 L14,13 Z"
                          id="形状"
                          fill="#FFFFFFFF"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>

                <path
                  d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"
                />

                <span class="mt-auto text-white">Student</span>
              </RouterLink>
            </li>
            <li v-if="authStore.isAdmin || authStore.isAdvisor" class="flex flex-col items-center mt-8">
              <RouterLink
                :to="{ name: 'advisor' }"
                class="inline-flex flex-col items-center p-2 text-gray-900 rounded-lg group"
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <title>badge_line</title>
                  <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="User" transform="translate(-576.000000, 0.000000)" fill-rule="nonzero">
                      <g id="badge_line" transform="translate(576.000000, 0.000000)">
                        <path
                          d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                          id="MingCute"
                          fill-rule="nonzero"
                        ></path>
                        <path
                          d="M14.4472,1.10555 C14.9412,1.35254 15.1414,1.95321 14.8944,2.44719 L14.118,3.99997 L18,3.99997 C19.1046,3.99997 20,4.89541 20,5.99998 L20,20 C20,21.1045 19.1046,22 18,22 L6,22 C4.89543,22 4,21.1045 4,20 L4,5.99998 C4,4.89541 4.89543,3.99997 6,3.99997 L9.88197,3.99997 L9.10557,2.44719 C8.85858,1.95321 9.05881,1.35254 9.55279,1.10555 C10.0468,0.858558 10.6474,1.05878 10.8944,1.55276 L12,3.76391 L13.1056,1.55276 C13.3526,1.05878 13.9532,0.858558 14.4472,1.10555 Z M10.882,5.99998 L6,5.99998 L6,20 L18,20 L18,5.99998 L13.0002,5.99998 C12.9999,6.36652 12.7974,6.71932 12.4472,6.8944 C11.9532,7.14139 11.3526,6.94117 11.1056,6.44719 L10.882,5.99998 Z M13.5,14 C14.8807,14 16,15.1193 16,16.5 L16,17 C16,17.5523 15.5523,18 15,18 C14.4477,18 14,17.5523 14,17 L14,16.5 C14,16.2238 13.7761,16 13.5,16 L10.5,16 C10.2239,16 10,16.2238 10,16.5 L10,17 C10,17.5523 9.55228,18 9,18 C8.44772,18 8,17.5523 8,17 L8,16.5 C8,15.1193 9.11929,14 10.5,14 L13.5,14 Z M12,8.99998 C13.1046,8.99998 14,9.89541 14,11 C14,12.1045 13.1046,13 12,13 C10.8954,13 10,12.1045 10,11 C10,9.89541 10.8954,8.99998 12,8.99998 Z"
                          id="形状"
                          fill="#FFFFFFFF"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <span class="mt-auto text-white">Advisor</span>
              </RouterLink>
            </li>

            <!-- <li class="flex flex-col items-center mt-5">
              <RouterLink
                :to="{ name: 'Signin' }"
                class="inline-flex flex-col items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
               >
                <svg
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>

                <span class="mt-auto text-white">Sign In</span>
              </RouterLink>
            </li> -->

            <!-- <li class="flex flex-col items-center mt-5">              
              <RouterLink
                :to="{ name: 'Signup' }"
                class="inline-flex flex-col items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <line x1="20" y1="8" x2="20" y2="14" />
                  <line x1="23" y1="11" x2="17" y2="11" />
                </svg>

                <span class="mt-auto text-white">Sign Up</span>
              </RouterLink>
            </li> -->
            <li class="flex flex-col items-center mt-8">
              <div
                @click="logout"
                class="inline-flex flex-col items-center p-2 text-gray-900 rounded-lg group"
              >
                <svg
                  class="h-6 w-6 text-white ml-1"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path
                    d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
                  />
                  <path d="M7 12h14l-3 -3m0 6l3 -3" />
                </svg>

                <span class="mt-auto text-white">Logout</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </div>
    <div class="w-full">
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useMessageStore } from './stores/message'
import { useAuthStore } from './stores/auth'
import { useRouter } from 'vue-router'

const store = useMessageStore()
const { message } = storeToRefs(store)
const authStore = useAuthStore()
const router = useRouter()
const token = localStorage.getItem('token')
const user = localStorage.getItem('user')

if (token && user) {
  authStore.reload(token, JSON.parse(user))
} else {
  authStore.logout()
}

function logout() {
  authStore.logout()
  router.push({ name: 'Signin' })
}
</script>
