<template>
  <div class="page-container">
    <h2>Dobrodošao!</h2>
    <div class="cards-container">
      <ServiceCard title="Obroci" link="/meals" />
      <ServiceCard title="Prijava kvara" link="/report" />
      <ServiceCard title="Rezervacija prostorije" link="/rooms" />
      <ServiceCard title="Plaćanje smještaja" link="/payment" />
    </div>
  </div>
</template>

<script>
import ServiceCard from '../components/ServiceCard.vue'

export default {
  components: {
    ServiceCard
  }
}
</script>

<style scoped>
.page-container {
  background-color: #e3f2fd;
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: auto;
}

h2 {
  color: #0d47a1;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.cards-container {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  width: 100%;
}
</style>
