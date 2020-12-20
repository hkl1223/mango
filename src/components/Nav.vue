<template>
  <div class="nav">
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-label"></use>
      </svg>
      <router-link to="/money">记账</router-link>
    </div>
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-money"></use>
      </svg>
      <router-link to="/labels">标签</router-link>
    </div>
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tongji1"></use>
      </svg>
      <router-link to="/statistics">统计</router-link>
    </div>
  </div>
</template>

<script lang ="ts">
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.nav{
  display: flex;
}
</style>