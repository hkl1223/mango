<template>
  <nav>
    <div class="item">
      <svg class="icon">
        <use xlink:href="#icon-label"></use>
      </svg>
      <router-link to="/money">记账</router-link>
    </div>
    <div class="item">
      <svg class="icon">
        <use xlink:href="#icon-money"></use>
      </svg>
      <router-link to="/labels">标签</router-link>
    </div>
    <div class="item">
      <svg class="icon" >
        <use xlink:href="#icon-tongji1"></use>
      </svg>
      <router-link to="/statistics">统计</router-link>
    </div>
  </nav>
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
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  flex-direction: row;

> .item {
  width: 33.33333%;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 2 0px;
  }
}
</style>