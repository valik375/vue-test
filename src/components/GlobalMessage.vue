<template>
  <div class="global-message"> {{ message }} </div>
</template>

<script>
export default {
  name: 'GlobalMessage',
  props: ['message']
}
</script>

<style scoped>
.global-message {
  position: fixed;
  left: 20px;
  top: 20px;
  width: calc(100% - 40px);
  padding: 10px;
  background: red;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}
</style>