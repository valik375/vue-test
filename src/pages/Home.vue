<template>
  <div class="home">
    <VenuesList />
  </div>
</template>

<script>

import VenuesList from '@/components/VenuesList'
export default {
  name: 'HomePage',
  components: {
    VenuesList
  }
}
</script>