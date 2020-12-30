<template>
  <div>
    <Layout classpPrefix="layout">
      <NumberPad :value.sync="record.amount" @submit="saveRecord" />
      <Tabs :data-source="recordTypeList" :value.sync="record.type" />
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
import Tabs from "@/components/Tab.vue";
import Notes from "@/components/money/Note.vue";
import Tags from "@/components/money/Tag.vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import recordTypeList from "@/constants/recordTypeList";

type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: Date;
};

@Component({
  components: { NumberPad, Tabs, Notes, Tags },
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }
  recordTypeList = recordTypeList;
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };

  created() {
    this.$store.commit("fetchRecords");
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    this.$store.commit("createRecord", this.record);
  }
}
</script> 

<style lang="scss" scoped>
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