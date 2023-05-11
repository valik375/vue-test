<template>
  <h1 class="page-title"><slot/></h1>
</template>

<script>
export default {
  name: 'PageTitle'
}
</script>

<style scoped>
.page-title {
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
}
</style>