<template>
  <div class="hello">
    <VenuesItem
      v-for="venues in getVenues"
      :key="venues.id"
      :venues="venues"
    />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import VenuesItem from "@/UI/VenuesItem";

export default {
  name: 'HomeComponent',
  components: {
    VenuesItem
  },
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(['getVenues'])
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
