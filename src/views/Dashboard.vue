<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogout = () => {
  localStorage.removeItem('authToken')
  router.push({ name: 'home' })
}
</script>

<template>
  <header class="text-center">
    <h1 class="text-5xl my-5 font-medium">Dashboard</h1>
  </header>
  <div class="min-h-screen flex justify-center mt-10">
    <div class="w-full max-w-md px-4">
      <button
        @click="handleLogout"
        class="w-full px-4 py-2.5 bg-white text-gray-700 rounded-lg font-medium text-sm shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
      >
        Logout
      </button>
    </div>
  </div>
</template>
