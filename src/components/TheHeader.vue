<template> 
  <header class="header"  v-scroll="handleScroll" :class="{ active: isActive }" >
    <div class="header__inner">
      <div class="header__logo">
        <Logo></Logo>
      </div>
      <div class="header__switch">
        <switch-button  :class="{ enabled: isEnabled }"  @SwitchToggle="SwitchToggleAdd"/>
      </div>
      <nav class="menu">
        <ul class="menu__list">
          <li class="menu__item">
            <NuxtLink to="/about">После ремонта</NuxtLink>
          </li>

          <li class="menu__item">
            <NuxtLink to="/">Генеральная уборка</NuxtLink>
          </li>
          <li class="menu__item">
            <NuxtLink to="/">Регулярная уборка</NuxtLink>
          </li>
          <li class="menu__item">
            <NuxtLink to="/">Мойка окон</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="number">
        <a href="tel:++380 67 401 69 77" class="number__link"
          >+380 67 401 69 77</a
        >
        <div class="number__text">24/7</div>
      </div>
      <div class="burger active" >
        <button class="burger__menu" type="button">
          <span class="burger__line"></span>
          <span class="burger__line"></span>
        </button>
      </div>
    </div>
  </header>
</template>
<script>
import Logo from "./Logo.vue";
import SwitchButton from "./SwitchButton.vue";
export default {
  components: {
    Logo,
    SwitchButton
  },
  data() {
    return {
       isActive: false,
        switch1: false,
        isEnabled: false,
    };
  },

  methods: {
    handleScroll: function (evt, el) {
      if (window.scrollY > 50) {
       this.isActive = true;
      }else{
          this.isActive = false;
      }
      return
    },
    SwitchToggleAdd: function() {
      console.log("iii")
        this.isEnabled = !this.isEnabled
    }

    
  },
  
};
</script>

<style lang="scss"></style>
