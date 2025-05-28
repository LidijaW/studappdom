<template>
  <div class="card" @click="goTo">
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  props: ['title', 'link'],
  setup(props) {
    const router = useRouter()
    const goTo = () => router.push(props.link)
    return { goTo }
  }
}
</script>

<style scoped>
.card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: 0.2s ease;
  cursor: pointer;
}
.card:hover {
  transform: translateY(-3px);
  background-color: #f1f1f1;
}
</style>
