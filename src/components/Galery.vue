<template>
  <div class="gallery" v-scroll="handleScroll" v-bind:class="{ active: isActive }">
    <div class="gallery__inner">
      <galleryCard v-for="galleryCard in galleryCards " :key="galleryCard.id" :galleryCard="galleryCard" ></galleryCard>
    </div>
  </div>
</template>

<style lang="scss">
</style>
<script>
import galleryCard from "./galleryCard.vue";
export default {
  components: {
    galleryCard
  },
  data() {
      return { 
        galleryCards: [
      { id: '1' ,title: "Тщательно отобранный персонал", img: require("~/assets/img/card_1.png"), text:"Не нужно тратить время, силы и ресурсы на разме- щение вакансий, проведе- ние собеседований, про- верку кандидатов на должность уборщицы. За счет больших объемов мы можем сделать это эффективнее.", },
      {id: '2' , title: "Качественная эко-химия", img: require("~/assets/img/card_2.png"), text:"Не нужно тратить время, силы и ресурсы на разме- щение вакансий, проведе- ние собеседований, про- верку кандидатов на должность уборщицы. За счет больших объемов мы можем сделать это эффективнее.", },
      { id: '3' , title: "Контролируем качество", img: require("~/assets/img/card_3.png"), text:"Не нужно тратить время, силы и ресурсы на разме- щение вакансий, проведе- ние собеседований, про- верку кандидатов на должность уборщицы. За счет больших объемов мы можем сделать это эффективнее.", },
      {id: '4' , title: "Работаем круглосуточно", img: require("~/assets/img/card_4.png"), text:"Не нужно тратить время, силы и ресурсы на разме- щение вакансий, проведе- ние собеседований, про- верку кандидатов на должность уборщицы. За счет больших объемов мы можем сделать это эффективнее.", },
    ],
    isActive: false,
  }
  
  },
  methods: {
    handleScroll: function (evt, el) {
      if (window.scrollY > 100) {
       this.isActive = true;
      }
      return
    }
    
  },
};
</script>