<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import HomeButton from '@/components/HomeButton.vue'

const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref('')

const handleLogin = () => {
  error.value = ''

  if (!email.value || !password.value) {
    error.value = 'All fields are required'
    return
  }

  if (email.value === 'root@root.com' && password.value === 'root') {
    const fakeToken = 'token_' + Math.random().toString(36).substr(2, 9)
    localStorage.setItem('authToken', fakeToken)
    console.log('Login successful')
    router.push({ name: 'dashboard' })
  } else {
    console.log('Invalid credentials')
    error.value = 'Invalid credentials'
  }
}
</script>

<template>
  <HomeButton />
  <header class="text-center">
    <h1 class="text-5xl my-5 font-medium">Login with Email</h1>
  </header>
  <div class="min-h-screen flex justify-center mt-10">
    <div class="w-full max-w-md px-4">
      <form @submit.prevent="handleLogin" class="space-y-6">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 text-sm"
          required
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 text-sm"
          required
        />

        <p v-if="error" class="text-red-600 text-sm text-center">{{ error }}</p>

        <button
          type="submit"
          class="w-full px-4 py-2.5 bg-white text-gray-700 rounded-lg font-medium text-sm shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
        >
          Continue
        </button>
      </form>

      <a
        href="#"
        @click.prevent="router.push({ name: 'registerLoginWithEmail' })"
        class="text-blue-600 text-lg hover:text-blue-800 hover:underline inline-block mt-6"
        >Sign up</a
      >
    </div>
  </div>
</template>
