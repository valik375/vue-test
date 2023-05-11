<template>
  <input
      class="base-input"
      :value="value"
      :type="type"
      :placeholder="placeholder"
      @change="(event) => $emit('value', event.target.value)"
  >
</template>

<script>
export default {
  name: 'BaseInput',
  props: ['type', 'placeholder', 'value']
}
</script>

<style scoped>
.base-input {
  width: 100%;
  height: 50px;
  border: 2px solid #000000;
  border-radius: 4px;
}
</style>