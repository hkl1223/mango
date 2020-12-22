<template>
  <div>
    <Layout classpPrefix="layout">
      <NumberPad />
      <Types xxx="hi"/>
      <Notes />
      <Tags />
    </Layout>
  </div>
</template>


<script lang ="ts">
import NumberPad from "@/components/money/Number.vue";
import Types from "@/components/money/Type.vue";
import Notes from "@/components/money/Note.vue";
import Tags from "@/components/money/Tag.vue";
export default {
  components: { NumberPad, Types, Notes, Tags },
  name: "Money",
};
</script> 

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
</style>