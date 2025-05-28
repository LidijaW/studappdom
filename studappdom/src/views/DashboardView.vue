<template>
  <div>
    <h2>Dobrodošao!</h2>
    <div class="cards">
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
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 20px;
}
</style>
