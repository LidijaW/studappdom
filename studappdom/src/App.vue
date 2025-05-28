<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
}
#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}

input, select {
  display: block;
  margin: 10px 0;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style>
