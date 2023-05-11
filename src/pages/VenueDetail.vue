<template>
  <div class="venues-details">
    <h1>{{ getVenuesDetails(venuesUrlId).name }}</h1>
<!---->
    <form class="venues-details__form" @submit.prevent="createReview">
      <h2>Review</h2>
      <input v-model="reviewTitle" type="text" required placeholder="text">
      <div class="venues-details__checkbox-wrapper">
        <div class="venues-details__radio" v-for="rateItem in reviewRate" :key="rateItem.rate">
          <label :for="rateItem.rate">{{rateItem.rate}}</label>
          <input :id="rateItem.rate" :value="rateItem.isActive" @change="rateItem.isActive = !rateItem.isActive" type="radio">
        </div>
      </div>
      <button type="submit">Create Review</button>
    </form>
<!---->
    <div class="venues-details__review" v-if="reviews.length">
      <div class="venues-details__review-item" v-for="review in reviews" :key="review.id">
        <div class="venues-details__review-title">{{review.title}}</div>
        <div class="venues-details__review-qty">{{review.reviewQty.rate}}</div>
      </div>
    </div>
<!--    -->
    <div class="venues-details__message" v-else>No reviews</div>
<!--    -->
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'SurveyComponent',
  data: () => {
    return {
      venuesUrlId: '',
      reviewTitle: '',
      reviewRate: [
        {
          rate: 1,
          isActive: false
        },
        {
          rate: 2,
          isActive: false
        },
        {
          rate: 3,
          isActive: false
        },
        {
          rate: 4,
          isActive: false
        },
        {
          rate: 5,
          isActive: false
        },
      ],
      reviews: []
    }
  },
  computed: {
    ...mapGetters(['getVenuesDetails'])
  },
  methods: {
    ...mapMutations(['addReview']),
    createReview() {
      const reviewId = Date.now()
      this.addReview({
        id: reviewId,
        title: this.reviewTitle,
        reviewQty: this.reviewRate.filter(r => r.isActive)[0],
        venuesId: this.venuesUrlId
      })
      this.$router.push(`/preview/${reviewId}`)
    }
  },
  mounted() {
    this.venuesUrlId = this.$route.params.id.toString()
  }
}
</script>

<style scoped>
.venues-details__checkbox-wrapper {
  display: flex;
  margin: 0 auto;
  max-width: 200px;
}
</style>
