<template>
  <div class="view-container">
    <h2>Jelovnik</h2>
    <div class="meal" v-for="(meal, index) in meals" :key="index">
      <strong>{{ meal.day }}:</strong> {{ meal.menu }}
      <button @click="reserve(meal.day)">Rezerviraj</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meals: [
        { day: 'Ponedjeljak', menu: 'Piletina s rižom' },
        { day: 'Utorak', menu: 'Grah s kobasicom' },
        { day: 'Srijeda', menu: 'Špageti bolognese' },
      ]
    }
  },
  methods: {
    reserve(day) {
      alert(`Obrok za ${day} je rezerviran.`)
    }
  }
}
</script>

<style scoped>
.view-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.05);
  max-width: 600px;
  margin: 2rem auto;
}
.meal {
  margin-bottom: 1rem;
}
button {
  margin-top: 0.5rem;
}
</style>
