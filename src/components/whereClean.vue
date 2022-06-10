<template>
  <div class="where-clean" :class="{ active: isActive }">
    <div class="where-clean__inner">
      <button class="where-clean__back" @click="$emit('CleanBackFalse')">
        Как мы убираем
      </button>
      <tabs>
        <tab name="Кухня" :selected="true">
          <div class="where-clean__img">
            <img src="~/assets/img/where-clean_1.jpg" alt="" />
            <div class="pin pin_1">
              <div class="pin__inner">
                <div class="pin__item">
                    <plus v-for="plus in plus_1 " :key="plus.id" :plus="plus" ></plus>
                </div>
              </div>
            </div>
          </div>
        </tab>
        <tab name="Комнаты">
          <div class="where-clean__img">
            <img src="~/assets/img/where-clean_2.jpg" alt="" />
            <div class="pin pin_2">
              <div class="pin__inner">
                <div class="pin__item">
                    <plus v-for="plus in plus_2 " :key="plus.id" :plus="plus" ></plus>
                </div>
              </div>
            </div>
          </div>
        </tab>
        <tab name="Ванная">
          <div class="where-clean__img">
            <img src="~/assets/img/where-clean_1.jpg" alt="" />
            <div class="pin pin_1">
              <div class="pin__inner">
                <div class="pin__item">
                    <plus v-for="plus in plus_1 " :key="plus.id" :plus="plus" ></plus>
                </div>
              </div>
            </div>
          </div>
        </tab>
        <tab name="Прихожая">
          <div class="where-clean__img">
            <img src="~/assets/img/where-clean_2.jpg" alt="" />
            <div class="pin pin_2">
              <div class="pin__inner">
                <div class="pin__item">
                    <plus v-for="plus in plus_2 " :key="plus.id" :plus="plus" ></plus>
                </div>
              </div>
            </div>
          </div>
        </tab>
      </tabs>
    </div>
  </div>
</template>

});
<script>
import tabs from "./tabs.vue";
export default {
  components: {
    tabs,
  },
  name: 'whereClean',
props: ['whereClean'],
  data() {
    return {
      isActive: false,
        plus_1: [
      { id: '1' ,text: "Чистим фасад вытяжки", },
      {id: '2' , text: "Чистим фасад вытяжки", },
      { id: '3' , text: "Чистим фасад вытяжки",},
      {id: '4' , text: "Чистим фасад вытяжки", },
      {id: '5' , text: "Чистим фасад вытяжки", },
      {id: '6' , text: "Чистим фасад вытяжки", },
      {id: '7' , text: "Чистим фасад вытяжки", },
    ],
          plus_2: [
      { id: '1' ,text: "Чистим фасад вытяжки", },
      {id: '2' , text: "Чистим фасад вытяжки", },
      { id: '3' , text: "Чистим фасад вытяжки",},
      {id: '4' , text: "Чистим фасад вытяжки", },
      {id: '5' , text: "Чистим фасад вытяжки", },
    ],
    };
  },
  methods: {
   
  },
};
</script>
<style lang="scss">
</style>
