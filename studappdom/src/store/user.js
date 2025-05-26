import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    isAuthenticated: false,
    user: null,
  }),
  actions: {
    login(email, password) {
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
