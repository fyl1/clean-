        
<template id="switch-button">
  <div class="switch-button-control">
    <div class="switch-button" @click="$emit('SwitchToggle')">
      <div class="button"></div>
      <span class="switch-button__first">Дом</span
      ><span class="switch-button__second">Офис</span>
    </div>
    <div class="switch-button-label">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  template: "#switch-button",
  model: {
    prop: "isEnabled",
    event: "toggle",
  },
  props: {
    isEnabled: false,
  },
  methods: {},
};
</script>
