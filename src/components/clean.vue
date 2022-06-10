<template>
  <div class="clean" v-scroll="handleScroll" > 
    <div class="clean__inner">
      <h2 class="clean__title">Как мы убираем</h2>
      <div class="clean__text">
        Клинер приезжает в назначенное время со всем необходимым и сразу
        приступает к делу. Вам остаётся только оценить результат.
      </div>
      <whereClean :class="{ active: isActive  }"  @CleanBackFalse="isActiveFalse" />
    </div>
  </div>
</template>

<style lang="scss">
</style>

<script>
import whereClean from "~/components/whereClean.vue";
export default {
  components: {
    whereClean,
  },
  data() {
    return {
      isActive: false,
            whereClean: [],
    };
  },
  methods: {
    handleScroll: function (evt, el) {
      if (window.scrollY > 750) {
        this.isActive = true;
      } else if (window.scrollY < 500) {
        this.isActive = false;
      }
      return;
    },
    isActiveFalse: function () {
      this.isActive = false;
      return;
    },
   
  },
};
</script>
