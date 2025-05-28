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
      desc: "",
    };
  },
  methods: {
    submit() {
      if (this.desc.length < 10) {
        alert("Opis mora imati barem 10 znakova.");
        return;
      }
      alert("Kvar uspješno prijavljen.");
      this.desc = "";
    },
  },
};
</script>

<style scoped>
body {
  background-color: #e3f2fd; /* svijetlo plava pozadina */
}

.view-container {
  background: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  max-width: 600px;
  margin: 3rem auto;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #0d47a1;
  margin-bottom: 1.5rem;
}

textarea {
  width: 100%;
  min-height: 120px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  border: 1px solid #b0bec5;
  font-size: 1rem;
  resize: vertical;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
}

textarea:focus {
  outline: none;
  border-color: #64b5f6;
  box-shadow: 0 0 0 3px rgba(100, 181, 246, 0.3);
}

button {
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
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
