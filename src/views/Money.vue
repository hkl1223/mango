<template>
  <div>
    <Layout classpPrefix="layout">
      <NumberPad :value.sync="record.amount" @submit="saveRecord" />
      <Types :value.sync="record.type" />
      <div class="notes">
        <Notes
          fieldName="备注"
          placeholder="在这里输入备注"
          @update:value="onUpdateNotes"
        />
      </div>
      <Tags />
    </Layout>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/money/Number.vue";
import Types from "@/components/money/Type.vue";
import Notes from "@/components/money/Note.vue";
import Tags from "@/components/money/Tag.vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import store from "@/store/index2.ts";

type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: Date;
};

@Component({
  components: { NumberPad, Types, Notes, Tags },

  computed:{
    recordList(){
      return store.recordList;
    }
}
})

export default class Money extends Vue {
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    store.createRecord(this.record);
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
.notes {
  padding: 12px 0;
}
</style>