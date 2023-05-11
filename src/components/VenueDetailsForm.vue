<template>
  <form class="venues-details-form" @submit.prevent="createReview">
    <h2 class="venues-details-form__title">Add Review</h2>
    <BaseInput
      v-model="title"
      type="text"
      placeholder="Title"
      required
    />
    <div class="venues-details-form__checkbox-wrapper">
      <div class="venues-details-form__radio" v-for="rate in rates" :key="rate">
        <label :for="rate">{{rate}}</label>
        <input :id="rate" :value="rate" v-model="selectedRate" type="radio">
      </div>
    </div>
    <BaseButton class="venues-details-form__button" type="submit">Create Review</BaseButton>
  </form>
</template>

<script>
import BaseInput from '@/UI/BaseInput'
import BaseButton from "@/UI/BaseButton";
export default {
  name: 'VenueDetailsForm',
  components: {
    BaseButton,
    BaseInput
  },
  data: () => {
    return {
      title: '',
      selectedRate: '',
      rates: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    createReview() {
      this.$emit('submitForm', {
        title: this.title,
        selectedRate: this.selectedRate
      })
    }
  }
}
</script>

<style scoped>
.venues-details-form {
  width: 100%;
  max-width: 340px;
  margin: 0 auto;
}
.venues-details-form__title {
  font-weight: 500;
  margin-bottom: 20px;
  color: #444;
}
.venues-details-form__checkbox-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.venues-details-form__button {
  margin: 0 auto 10px;
}
</style>