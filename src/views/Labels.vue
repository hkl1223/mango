<template>
  <div>
    <Layout>
      <ol>
        <li>
          <span>衣</span>
          <Icon name="right"/>
        </li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ol>
      <div>
        <button>新建标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang ="ts">
import Icon from '@/components/Icon.vue';
export default {
  components: { Icon },
  name: "Labels",
};
</script> 
