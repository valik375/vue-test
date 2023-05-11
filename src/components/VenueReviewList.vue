<template>
  <div class="venue-review">
    <div class="venues-details__review" v-if="reviews.length">
      <div class="venues-details__review-item" v-for="review in reviews" :key="review.id">
        <div class="venues-details__review-title">{{review}}</div>
        <div class="venues-details__review-qty">{{review.reviewQty.rate}}</div>
      </div>
    </div>

    <div class="venues-details__message" v-else>No reviews</div>
  </div>
</template>

<script>
export default {
  name: 'VenueReview'
}
</script>

<style scoped>

</style>