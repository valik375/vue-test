<template>
  <div class="thank-you">
    <h1>Thank you</h1>
    <router-link :to="{name: routeHelper.homePageName}">Main Page</router-link>
  </div>
</template>

<script>
import routeStringHelper from '@/helpers/routeStringHelper.js'
export default {
  name: 'ThankYou',
  data: () => {
    return {
      routeHelper: routeStringHelper
    }
  }
}
</script>