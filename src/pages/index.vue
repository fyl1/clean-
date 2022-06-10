<template>
  <div>
    <Intro />
     <Galery/>
    <Clean />
    <div class="index__order-cleaning">
      <orderCleaning />
    </div>
  </div>
</template>

<script>
import Intro from "~/components/intro.vue";
import Clean from "~/components/clean.vue";
import Galery from "~/components/Galery.vue";
import orderCleaning from "~/components/orderCleaning.vue";

export default {
  components: {
    Intro,
    Clean,
    Galery,
    orderCleaning,
  },
};

</script>
<style lang="scss">
</style>