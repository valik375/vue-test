<template>
  <button @click="$emit('handleClick')" class="button">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
}
</script>

<style scoped>
.button {
  width: 100%;
  height: 44px;
  max-width: 220px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>