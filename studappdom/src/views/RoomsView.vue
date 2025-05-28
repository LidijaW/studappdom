<template>
  <div class="view-container">
    <h2>Rezervacija prostorije</h2>

    <label for="room">Prostorija</label>
    <select id="room" v-model="room">
      <option disabled value="">-- Odaberi prostoriju --</option>
      <option>Učionica 1</option>
      <option>Učionica 2</option>
      <option>Dvorana A</option>
      <option>Dvorana B</option>
      <option>Konferencijska soba</option>
      <option>Laboratorij 1</option>
    </select>

    <label for="date">Datum</label>
    <input id="date" type="date" v-model="date" />

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
body {
  background-color: #e3f2fd;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
}

.view-container {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 3rem auto;
}

h2 {
  text-align: center;
  color: #0d47a1;
  margin-bottom: 2rem;
  font-size: 1.8rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
  font-size: 1.05rem;
}

select,
input[type="date"] {
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  border: 1px solid #b0bec5;
  font-size: 1rem;
  background-color: #f9f9f9;
  transition: border-color 0.2s, box-shadow 0.2s;
}

select:focus,
input[type="date"]:focus {
  outline: none;
  border-color: #64b5f6;
  box-shadow: 0 0 0 3px rgba(100, 181, 246, 0.3);
}

button {
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.75rem 1.2rem;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #1565c0;
}
</style>
