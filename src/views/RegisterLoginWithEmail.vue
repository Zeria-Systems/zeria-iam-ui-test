<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import HomeButton from '@/components/HomeButton.vue'

const router = useRouter()
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')
const success = ref('')

const handleRegister = () => {
  error.value = ''
  success.value = ''

  if (!email.value || !password.value || !confirmPassword.value) {
    error.value = 'All fields are required'
    return
  }

  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match'
    return
  }

  success.value = 'User registered successfully'
  email.value = ''
  password.value = ''
  confirmPassword.value = ''
}
</script>

<template>
  <HomeButton />
  <header class="text-center">
    <h1 class="text-5xl my-5 font-medium">Sign Up</h1>
  </header>
  <div class="min-h-screen flex justify-center mt-10">
    <div class="w-full max-w-md px-4">
      <form @submit.prevent="handleRegister" class="space-y-6">
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
        <input
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 text-sm"
          required
        />

        <p v-if="error" class="text-red-600 text-sm text-center">{{ error }}</p>
        <p v-if="success" class="text-green-600 text-sm text-center">{{ success }}</p>

        <button
          type="submit"
          class="w-full px-4 py-2.5 bg-white text-gray-700 rounded-lg font-medium text-sm shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
        >
          Sign Up
        </button>
      </form>

      <a href="#"
      @click.prevent="router.push({ name: 'loginWithEmail' })"
      class="text-blue-600 text-lg hover:text-blue-800 hover:underline inline-block mt-6"
      >
      Login
      </a>
    </div>
  </div>
</template>
