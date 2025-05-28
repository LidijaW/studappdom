<template>
  <div class="view-container">
    <h2>Prijava kvara</h2>
    <textarea v-model="desc" placeholder="Unesi opis kvara..."></textarea>
    <button @click="submit">Pošalji</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desc: ''
    }
  },
  methods: {
    submit() {
      if (this.desc.length < 10) {
        alert('Opis mora imati barem 10 znakova.')
        return
      }
      alert('Kvar uspješno prijavljen.')
      this.desc = ''
    }
  }
}
</script>

<style scoped>
textarea {
  width: 100%;
  min-height: 100px;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  resize: vertical;
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
