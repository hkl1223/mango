<template>
  <div>
    <Layout>
      <div class="tags">
        <router-link
          class="tag"
          v-for="tag in tags"
          :key="tag.id"
          :to="`/labels/edit/${tag.id}`"
        >
          <span>{{ tag.name }}</span>
          <svg class="icon">
            <use xlink:href="#icon-right"></use>
          </svg>
        </router-link>
      </div>
      <div class="createTag-Wrapper">
        <Button class="createTag" @click="createTag">新建标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang ="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import store from "@/store/index2";

@Component
export default class Lables extends Vue {
  tags = store.tagList;

  createTag() {
    const name = window.prompt("请输入标签名");
    if (name) {
      store.createTag(name);
    }
  }
}
</script> 

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;

  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg {
      margin-right: 16px;
    }
  }
}
.icon {
  width: 1em;
  height: 1em;
}
.createTag {
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
