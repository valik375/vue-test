<template>
  <input
      class="base-input"
      :value="value"
      :type="type"
      :placeholder="placeholder"
      @input="updateInput"
  >
</template>

<script>
export default {
  name: 'BaseInput',
  props: ['type', 'placeholder', 'value'],
  methods: {
    updateInput(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped>
.base-input {
  width: 100%;
  height: 40px;
  border: 2px solid #000000;
  border-radius: 4px;
  padding: 0 10px;
  margin-bottom: 10px;
}
</style>