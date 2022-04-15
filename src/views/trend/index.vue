<!--
 * @Author: kejie
 * @Date: 2022-04-15 10:00:50
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-15 16:55:56
 * @FilePath: \vue3-ts-element-plus-learn\src\views\trend\index.vue
 * @Description: file content
-->
<template>
  <div class="trend">
    <trend>
      销售额
    </trend>
    <trend trendType="down">
      营业额
    </trend>
  </div>
  <div class="trend">
    <trend text="总人数" upTextColor="blue" upIconColor="#1234aa">
    </trend>
    <trend trendType="down" :isReverseIconColor="true">
      新生儿出生率
    </trend>
  </div>
  <div class="trend">
    <trend upIcon="CaretTop">
      小星星
    </trend>
    <trend trendType="down" downIcon="CaretBottom">
      热热热
    </trend>
  </div>
</template>

<script lang='ts' setup>
</script>

<style lang='scss' scoped>
.trend {
  display: flex;
  margin-top: 20px;
}
</style>