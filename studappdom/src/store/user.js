import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    login(email, password) {
      // Dummy login logika
      if (email && password) {
        this.user = { email };
        this.isAuthenticated = true;
      }
    },
    register(email, password) {
      // Dummy registracija logika
      if (email && password) {
        this.user = { email };
        this.isAuthenticated = true;
      }
    },
    logout() {
      this.user = null;
      this.isAuthenticated = false;
    },
  },
});
