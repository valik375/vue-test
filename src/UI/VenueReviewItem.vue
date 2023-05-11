<template>
  <div class="venue-review__item">
    <div class="venue-review__title">{{review.title}}</div>
    <div class="venue-review__rate">{{review.selectedRate}}</div>
  </div>
</template>

<script>
export default {
  name: 'VenueReviewItem',
  props: ['review']
}
</script>

<style scoped>
.venue-review__item {
  width: 100%;
  max-width: 340px;
  margin: 0 auto 10px;
  border: 2px solid #000;
  padding: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 6px;
}
.venue-review__title {
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 700;
  padding-right: 30px;
  text-align: left;
}
.venue-review__rate {
  font-size: 24px;
  font-weight: 700;
  color: #a8a823;
}
</style>