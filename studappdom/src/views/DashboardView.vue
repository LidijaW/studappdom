<template>
  <div>
    <h2>Dobrodošli, {{ store.user.email }}</h2>
    <div class="grid grid-cols-2 gap-4">
      <ServiceCard title="Obroci" />
      <ServiceCard title="Prijava kvara" />
      <ServiceCard title="Rezervacija prostorije" />
      <ServiceCard title="Plaćanje smještaja" />
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '../store/user'
import ServiceCard from '../components/ServiceCard.vue'

const store = useUserStore()
</script>
