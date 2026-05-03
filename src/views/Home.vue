<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToLoginWithEmail = () => {
  router.push({ name: 'loginWithEmail' })
}
</script>

<template>
  <header class="text-center">
    <h1 class="text-5xl my-5 font-medium">Zeria IAM Test</h1>
  </header>
  <div class="min-h-screen flex justify-center mt-10">
    <div class="max-w-5xl w-full px-4">
      <div class="flex flex-wrap justify-center gap-8">
        <div
          class="rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 m-2 text-center border border-gray-100 w-full sm:w-[45%] md:w-[30%] cursor-pointer"
          @click="goToLoginWithEmail"
        >
          <p class="text-xl font-medium mb-2">Login with Email</p>
          <p class="text-gray-600 text-sm">Authentication with email and password</p>
        </div>
      </div>
    </div>
  </div>
</template>
