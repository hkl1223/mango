<template>
  <div class="layout-wrapper">
    <div class="content" :class="classpPrefix && `${classpPrefix}-content`">
      <slot />
    </div>
    <Nav />
  </div>
</template>

<script lang ="ts">
export default {
  props: ["classpPrefix"],
  name: "Layout",
};
</script> 

<style lang="scss" scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  flex-grow: 1;
  overflow: auto;
}
</style>