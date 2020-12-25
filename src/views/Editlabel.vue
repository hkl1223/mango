<template>
  <Layout>
    <div class="navBar">
      <svg class="icon" @click="goBack">
        <use xlink:href="#icon-left"></use>
      </svg>
      <span class="title">编辑标签</span>
    </div>
    <div class="form-wrapper">
      <Notes
        :value="tag.name"
        @update:value="update"
        fieldName="标签名"
        placeholder="请输入标签名"
      />
    </div>
    <div class="button-wrapper">
      <Button @click="remove" class="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import tagListModel from "@/models/tagListModel";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Notes from "@/components/money/Note.vue";

@Component({
  components: { Notes },
})
export default class Editlabel extends Vue {
  tag?: { id: string; name: string } = undefined;

  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter((t) => t.id === id)[0];
    if (tag) {
      this.tag = tag;
    } else {
      this.$router.replace("/404");
    }
  }
  update(name: string) {
    if (this.tag) {
      tagListModel.update(this.tag.id, name);
    }
  }
  remove() {
    if (this.tag) {
      if(tagListModel.remove(this.tag.id)){
        this.$router.back()
      }else{
        window.alert('删除失败')
      }
    }
  }
  goBack(){
      this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 0;
  background: white;
  align-items: center;
  display: block;
  position: relative;
}
.icon {
  width: 1em;
  height: 1em;
  position: absolute;
  left: 16px;
  top: 16px;
}
.form-wrapper {
  background: white;
  margin-top: 8px;
}
.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
  > .remove {
    background: #d9d9d9;
    color: #333;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;
  }
}
</style>