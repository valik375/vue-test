<template>
  <div class="venue-review">
    <div class="venue-review__wrapper" v-if="reviews.length">
      <div class="venue-review__list" v-for="review in reviews" :key="review.id">
        <VenueReviewItem
          :review="review"
        />
      </div>
    </div>

    <div class="venue-review__message" v-else>No reviews</div>
  </div>
</template>

<script>
import VenueReviewItem from '@/UI/VenueReviewItem'
export default {
  name: 'VenueReviewList',
  props: ['reviews'],
  components: {
    VenueReviewItem
  }
}
</script>

<style scoped>

</style>