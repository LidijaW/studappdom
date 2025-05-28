<template>
  <div class="view-container">
    <h2>Plaćanje smještaja</h2>
    <p>Iznos za ovaj mjesec: <strong>50,00 €</strong></p>
    <button @click="pay">Plati</button>
  </div>
</template>

<script>
export default {
  methods: {
    pay() {
      alert('Plaćanje uspješno!')
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
</style>
