<template>
  <div>
    <Layout classpPrefix="layout">
      <NumberPad @update:value="onUpdateAmount" />
      <Types :value.sync="record.type" />
      <Notes @update:value="onUpdateNotes" />
      <Tags :dataSource.sync="tags" @update:value="onUpdateTags" />
    </Layout>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/money/Number.vue";
import Types from "@/components/money/Type.vue";
import Notes from "@/components/money/Note.vue";
import Tags from "@/components/money/Tag.vue";
import { Component, Prop } from "vue-property-decorator";

type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
};

@Component({
  components: { NumberPad, Types, Notes, Tags },
})
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行"];

  record: Record = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }
}
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