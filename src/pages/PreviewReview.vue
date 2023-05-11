<template>
  <div class="preview-review">
    <div class="preview-review__title">{{getReviewDetails(reviewId).title}}</div>
    <div class="preview-review__rate">{{getReviewDetails(reviewId).reviewQty.rate}}</div>
    <button @click="completeReviewHandler">Complete Review</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: 'PreviewReview',
  data: () => {
    return {
      reviewId: '',
      isLoading: false
    }
  },
  computed: {
    ...mapGetters(['getReviewDetails'])
  },
  methods: {
    ...mapActions(['createReview']),
    async completeReviewHandler() {
      this.isLoading = true
      await this.createReview(this.getReviewDetails(this.reviewId))
      this.$router.push('/thankyou')
    }
  },
  mounted() {
    this.reviewId = this.$route.params.reviewId.toString()
  }
}
</script>

<style scoped>

</style>