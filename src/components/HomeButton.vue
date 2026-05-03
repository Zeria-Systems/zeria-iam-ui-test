<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push({ name: 'home' })
}
</script>

<template>
  <button
    @click="goHome"
    class="fixed top-6 right-6 p-3 rounded-full bg-white hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
    style="
      box-shadow:
        0 4px 12px rgba(0, 0, 0, 0.12),
        0 2px 4px rgba(0, 0, 0, 0.08);
    "
    aria-label="Go to home"
  >
    <svg class="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" />
    </svg>
  </button>
</template>
