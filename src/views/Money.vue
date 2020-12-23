<template>
  <div>
    <Layout classpPrefix="layout">
      <NumberPad />
      <Types/>
      <Notes />
      <Tags :dataSource.sync="tags"/>
    </Layout>
  </div>
</template>


<script>
import NumberPad from "@/components/money/Number.vue";
import Types from "@/components/money/Type.vue";
import Notes from "@/components/money/Note.vue";
import Tags from "@/components/money/Tag.vue";
export default {
  components: { NumberPad, Types, Notes, Tags },
  name: "Money",
  data(){
    return{
      tags:['衣','食','住','行']
    }
  }
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