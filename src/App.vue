<script setup lang="ts"></script>

<template>
  <div class="screen">
  <div class="navbar bg-red-500">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl text-white">SSLT</a>
  </div>
</div>
<div class="flex">
  <!-- Drawer on the left -->
  <div class="w-1/6">
    <div class="drawer lg:drawer-open z-50">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        <!-- Page content here -->
        <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden "> > </label>
        </div>
      <div class="drawer-side">
        <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label> 
        <ul class="menu p-4 min-h-full bg-base-200 text-base-content">
          <!-- Sidebar content here -->
          <li class="hover:bg-red-400 rounded-md"><a class="hover:text-white">Sidebar Item 1</a></li>
          <li class="hover:bg-red-400 rounded-md"><a class="hover:text-white">Sidebar Item 1</a></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- RouterView on the right -->
  <div class="w-full">
    <RouterView />
  </div>
</div>

</div>


 
</template>
