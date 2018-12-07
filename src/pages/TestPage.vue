<style lang="less" scoped>
  .test-container {
    padding: 0 16px;
  }
</style>

<template lang="pug">
  .test-container
    el-row(:gutter='32')
      el-col(:span='8') Element
      el-col(:span='8') UI
      el-col(:span='8') Test
</template>

<script>
export default {
  mounted() {
    console.log(this);
  },
};
</script>
