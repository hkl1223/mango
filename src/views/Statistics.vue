<template>
  <Layout>
    <Tabs
      class-prefix="type"
      :data-source="recordTypeList"
      :value.sync="type"
    />
    <Tabs
      class-prefix="interval"
      :data-source="intervalList"
      :value.sync="interval"
    />
    <div>
      type:{{ type }}
      <br />
      interval:{{ interval }}
    </div>
  </Layout>
</template>

<script lang ="ts">
import Vue from "vue";
import Type from "@/components/money/Type.vue";
import Tabs from "@/components/Tabs.vue";
import { Component } from "vue-property-decorator";
import intervalList from "@/constans/intervalList";
import recordTypeList from "@/constans/recordTypeList";
@Component({
  components: { Type, Tabs },
})
export default class Statistics extends Vue {
  type = "-";
  interval = "day";
  intervalList = intervalList;
  recordTypeList = recordTypeList;
}
</script> 

<style lang="scss" scoped>
::v-deep .type-tabs-item {
  background: white;
  &.selected {
    background: #fccb2b;
    &::after {
      display: none;
    }
  }
}
</style>
