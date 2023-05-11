<template>
  <div class="venues-details">

    <PageTitle>{{ venue.name }}</PageTitle>
    <VenueDetailsForm
      @submitForm="createReview"
    />
    <VenueReviewList
      :reviews="reviews"
    />

  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import VenueDetailsForm from '@/components/VenueDetailsForm'
import PageTitle from '@/UI/PageTitle'
import routeStringHelper from '@/helpers/routeStringHelper'
import VenueReviewList from '@/components/VenueReviewList'

export default {
  name: 'VenueDetail',
  components: {
    VenueReviewList,
    PageTitle,
    VenueDetailsForm
  },
  data: () => {
    return {
      venue: '',
      reviewTitle: '',
      reviewRate: [1, 2, 3, 4, 5],
      reviews: [],
      routeHelper: routeStringHelper
    }
  },
  computed: {
    ...mapGetters(['getVenuesDetails'])
  },
  methods: {
    ...mapMutations(['addReview']),
    createReview(formData) {
      formData.id = Date.now()
      formData.venueId = this.$route.params.id.toString()
      this.addReview(formData)

      this.$router.push({name: this.routeHelper.PreviewReviewPageName})
    }
  },
  mounted() {
    this.venue = this.getVenuesDetails(this.$route.params.id.toString())
  }
}
</script>
