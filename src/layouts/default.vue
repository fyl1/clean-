<template>
  <div>
    <TheHeader />
   <main class="main"><Nuxt /></main> 
  </div>
</template>
<script>
import TheHeader from '../components/TheHeader.vue'
export default {
  components: {
    TheHeader,
  }
}
</script>
