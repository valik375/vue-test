<template>
 <router-link :to="`${routerHelper.venuesPath}/${venue.id}`" class="venue-item">
   {{venue.name}}
 </router-link>
</template>

<script>
import routeStringHelper from '@/helpers/routeStringHelper'

export default {
  name: 'VenueItem',
  props: ['venue'],
  data: () => ({
    routerHelper: routeStringHelper
  })
}
</script>

<style scoped>
.venue-item {
  display: block;
  margin-bottom: 20px;
}
</style>