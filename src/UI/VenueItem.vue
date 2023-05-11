<template>
 <router-link :to="`venues/${venues.id}`" class="card-item">
   {{venues.name}}
 </router-link>
</template>

<script>

export default {
  name: 'VenuesItem',
  props: ['venues']
}
</script>

<style scoped>
.card-item {
  display: block;
}
</style>