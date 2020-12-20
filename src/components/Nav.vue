<template>
  <nav>
    <div class="item">
      <router-link to="/money">
        <svg class="icon">
          <use xlink:href="#icon-money"></use>
        </svg>
        记账
      </router-link>
    </div>
    <div class="item">
      <router-link to="/labels">
        <svg class="icon">
          <use xlink:href="#icon-label"></use>
        </svg>
        标签
      </router-link>
    </div>
    <div class="item">
      <router-link to="/statistics">
        <svg class="icon">
          <use xlink:href="#icon-tongji1"></use>
        </svg>
        统计
      </router-link>
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
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  flex-flow: row nowrap;
  > .item {
    width: 33.3333%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    text-align: center;
  }
}
svg {
  display: block;
  margin: 0 auto;
}
</style>