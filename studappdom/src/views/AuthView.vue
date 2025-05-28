<template>
  <div class="auth-container">
    <h1>{{ isLogin ? 'Prijava' : 'Registracija' }}</h1>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Lozinka" />

    <button @click="handleAuth">{{ isLogin ? 'Prijavi se' : 'Registriraj se' }}</button>

    <p class="switch-link" @click="isLogin = !isLogin">
      {{ isLogin ? 'Nemaš račun? Registriraj se' : 'Već imaš račun? Prijavi se' }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../store/user'

const email = ref('')
const password = ref('')
const isLogin = ref(true)
const store = useUserStore()
const router = useRouter()

function handleAuth() {
  if (!email.value || !password.value) {
    alert('Molimo unesite email i lozinku.')
    return
  }

  if (password.value.length < 6) {
    alert('Lozinka mora imati barem 6 znakova.')
    return
  }

  if (isLogin.value) {
    store.login(email.value, password.value)
  } else {
    store.register(email.value, password.value)
  }

  router.push('/dashboard')
}
</script>

<style scoped>
.auth-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
}

input {
  margin: 0.5rem 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

button {
  margin-top: 1rem;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.switch-link {
  color: #007bff;
  cursor: pointer;
  margin-top: 1rem;
  text-align: center;
}
</style>
