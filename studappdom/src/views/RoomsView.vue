<template>
  <div class="view-container">
    <h2>Rezervacija prostorije</h2>
    <label>Prostorija</label>
    <select v-model="room">
      <option disabled value="">-- Odaberi prostoriju --</option>
      <option>Učionica 1</option>
      <option>Učionica 2</option>
    </select>

    <label>Datum</label>
    <input type="date" v-model="date" />

    <button @click="reserve">Rezerviraj</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      room: '',
      date: ''
    }
  },
  methods: {
    reserve() {
      if (!this.room || !this.date) {
        alert('Odaberi prostoriju i datum.')
        return
      }
      alert(`Rezervirano: ${this.room} na datum ${this.date}`)
    }
  }
}
</script>

<style scoped>
select, input {
  display: block;
  margin-bottom: 1rem;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 100%;
}
.view-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.05);
  max-width: 600px;
  margin: 2rem auto;
}
</style>
