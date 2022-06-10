<template>
     <div class="gallery-card">
    <div class="gallery-card__inner">
      <h3 class="gallery-card__title">{{galleryCard.title}}</h3>
      <div class="gallery-card__img">
          <img :src="galleryCard.img" class="img">
      </div>
      <div class="gallery-card__text">{{galleryCard.text}}</div>
    </div>
  </div>
</template>
<script>
export default {
name: 'galleryCard',
props: ['galleryCard']
};
</script>