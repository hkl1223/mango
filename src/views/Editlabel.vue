<template>
  <Layout>
    <div>
      <svg class="icon">
        <use xlink:href="#icon-left"></use>
      </svg>
      <span>编辑标签</span>
      <Notes fieldName="标签名" placeholder="请输入标签名"/>
    </div>
  </Layout>
</template>

<script lang="ts">
import tagListModel from "@/models/tagListModel";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Notes from '@/components/money/Note.vue'
import { component } from "vue/types/umd";

@Component({
    components:{Notes}
})
export default class Editlabel extends Vue {
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter((t) => t.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace("/404");
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
}
</style>