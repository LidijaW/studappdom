<template>
  <div class="outer-container">
    <div class="auth-box">
      <h2>Prijava</h2>
      <input v-model="email" placeholder="Email" type="email" />
      <input v-model="password" type="password" placeholder="Lozinka" />
      <button @click="handleLogin">Prijavi se</button>
    </div>
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

<style scoped>
.outer-container {
  background-color: #bbdefb; /* svjetlija plava pozadina */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.auth-box {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h2 {
  text-align: center;
  color: #0d47a1;
  margin-bottom: 1.5rem;
}

input {
  width: 100%;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid #b0bec5;
  border-radius: 10px;
  font-size: 1rem;
}

button {
  width: 100%;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.75rem;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #1565c0;
}
</style>
