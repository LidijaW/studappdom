<template>
  <div class="border p-4 rounded shadow cursor-pointer hover:bg-gray-100">
    <h3>{{ title }}</h3>
  </div>
</template>
<script setup>
// eslint-disable-next-line no-undef
defineProps({
  title: String,
  icon: String,
  description: String
})
</script>