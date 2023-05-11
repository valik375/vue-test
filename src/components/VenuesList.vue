<template>
  <div class="venues-list">
    <VenuesItem
        v-for="venue in getVenues"
        :key="venue.id"
        :venue="venue"
    />
  </div>
</template>

<script>
import VenuesItem from '@/UI/VenueItem'
import {mapGetters} from 'vuex'

export default {
  name: 'VenuesList',
  components: {
    VenuesItem
  },
  computed: {
    ...mapGetters(['getVenues'])
  },
}
</script>

<style scoped>

</style>