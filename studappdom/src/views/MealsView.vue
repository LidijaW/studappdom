<template>
  <div class="view-container">
    <h2>Jelovnik za ovaj tjedan</h2>
    <div class="meals-grid">
      <div class="meal-card" v-for="(meal, index) in meals" :key="index">
        <h3>{{ meal.day }}</h3>
        <p class="menu-name">{{ meal.menu }}</p>
        <ul class="details">
          <li><strong>Sastojci:</strong> {{ meal.ingredients }}</li>
          <li><strong>Kalorije:</strong> {{ meal.calories }} kcal</li>
          <li><strong>Cijena:</strong> {{ meal.price }} €</li>
        </ul>
        <button @click="reserve(meal.day)">Rezerviraj</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meals: [
        {
          day: 'Ponedjeljak',
          menu: 'Piletina s rižom',
          ingredients: 'Piletina, riža, povrće, začini',
          calories: 620,
          price: 4.50
        },
        {
          day: 'Utorak',
          menu: 'Grah s kobasicom',
          ingredients: 'Grah, kobasica, luk, začini',
          calories: 780,
          price: 4.20
        },
        {
          day: 'Srijeda',
          menu: 'Špageti bolognese',
          ingredients: 'Tjestenina, mljeveno meso, rajčica, začini',
          calories: 700,
          price: 4.70
        }
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
body {
  background-color: #e3f2fd; /* svijetlo plava */
}

.view-container {
  background: #e3f2fd; /* svijetlo plava pozadina kontejnera */
  padding: 2rem;
  border-radius: 16px;
  max-width: 1000px;
  margin: 2rem auto;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #0d47a1; /* tamnoplava */
}

.meals-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.meal-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease;
}

.meal-card:hover {
  transform: translateY(-5px);
}

.menu-name {
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0.5rem 0;
  color: #1565c0; /* plava */
}

.details {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 1rem 0;
  font-size: 0.9rem;
  color: #444;
}

button {
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #1565c0;
}
</style>
