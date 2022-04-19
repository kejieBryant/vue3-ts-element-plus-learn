<template>
  <m-progress :percentage="60" :isAnimation="true"/>
  <m-progress :percentage="60" :isAnimation="true" type="circle" />
</template>

<script lang='ts' setup>
</script>

<style lang='scss' scoped>
.el-progress {
  margin-bottom: 10px;
}
</style>