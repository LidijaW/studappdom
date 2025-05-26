<template>
  <div>
    <h2>Prijava</h2>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Lozinka" />
    <button @click="handleLogin">Prijavi se</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../store/user'

const email = ref('')
const password = ref('')
const router = useRouter()
const store = useUserStore()

function handleLogin() {
  store.login(email.value, password.value)
  router.push('/dashboard')
}
</script>
