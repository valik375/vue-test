<template>
  <div class="preview-review" v-if="review !== null">
    <div class="preview-review__title">Title: {{ review.title }}</div>
    <div class="preview-review__title">Rate: {{ review.selectedRate }}</div>
    <BaseButton @handleClick="completeReviewHandler">Complete Review</BaseButton>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import BaseButton from '@/UI/BaseButton'
import routeStringHelper from '@/helpers/routeStringHelper.js'

export default {
  name: 'PreviewReview',
  components: {
    BaseButton
  },
  data: () => {
    return {
      routeHelper: routeStringHelper,
      review: null,
      globalMessage: ''
    }
  },
  computed: {
    ...mapGetters(['getReview'])
  },
  methods: {
    ...mapActions(['createReview']),
    async completeReviewHandler() {
      await this.createReview(this.getReview)
      await this.$router.push({name: this.routeHelper.ThankYouPageName})
    }
  },
  mounted() {
    this.review = this.getReview
    !this.review ? this.$router.push({name: this.routeHelper.homePageName}) : null
  }
}
</script>

<style scoped>
.preview-review {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.preview-review__title {
  margin-bottom: 10px;
}
.preview-review__title {
  margin-bottom: 20px;
}
</style>