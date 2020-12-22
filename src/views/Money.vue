<template>
  <div>
    <Layout classpPrefix="layout">
      <NumberPad />
      <Types />
      <Notes />
      <Tags />
    </Layout>
  </div>
</template>


<script lang ="ts">
import NumberPad from "@/components/money/Number.vue";
import Types from "@/components/money/Types.vue";
import Notes from "@/components/money/Notes.vue";
import Tags from "@/components/money/Tags.vue";
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