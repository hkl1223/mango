<template>
  <button class="button">
      <solt/>
      </button>
</template>

<script lang ="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Button extends Vue {}
</script>

<style lang="scss" scoped>
.button {
  background: #d9d9d9;
  color: #333;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-Wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>