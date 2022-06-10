<template>
  <div class="plus">
    <div class="plus__inner">
        <div class="plus__content">
            <div class="plus__text">{{plus.text}}</div>
            
        </div>
        <div class="plus__box">
            <button class="plus__button">
            <span class="span_1"></span>
            <span class="span_2"></span>
            </button>
        </div>
        
    </div>
  </div>
</template>

<style lang="scss">
</style>
<script>

export default {
name: 'plus',
props: ['plus']
}
</script>