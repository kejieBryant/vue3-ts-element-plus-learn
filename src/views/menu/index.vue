<!--
 * @Author: kejie
 * @Date: 2022-04-18 15:37:33
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-19 15:20:54
 * @FilePath: \vue3-ts-element-plus-learn\src\views\menu\index.vue
 * @Description: file content
-->
<template>
<section class="menu">
  <m-menu
    :data="data" 
    defaultActive="3-1"
    active-text-color="red"
    icon="iconKey"
    index="indexKey"
    name="nameKey"
    children="childrenKey"
  />
  <infinite-menu
    :data="infiniteData" 
    defaultActive="2"
    active-text-color="red"
    class="infinite-menu"
  />
</section>
</template>

<script lang='ts' setup>
const data = [
  {
    iconKey: 'Document',
    indexKey: '1',
    nameKey: '导航1'
  },
  {
    iconKey: 'Document',
    indexKey: '2',
    nameKey: '导航2'
  },
  {
    iconKey: 'Document',
    indexKey: '3',
    nameKey: '导航3',
    childrenKey: [
      {
        iconKey: 'Document',
        indexKey: '3-1',
        nameKey: '导航3-1',
      },
      {
        iconKey: 'Document',
        indexKey: '3-2',
        nameKey: '导航3-2',
      }
    ]
  }
]

const infiniteData = [
  {
    icon: 'Document',
    index: '1',
    name: '导航1',
  },
  {
    icon: 'Document',
    index: '2',
    name: '导航2',
  },
  {
    icon: 'Document',
    index: '3',
    name: '导航3',
    children: [
      {
        icon: 'Document',
        index: '3-1',
        name: '导航3-1',
        children: [
          {
            icon: 'Document',
            index: '3-1-1',
            name: '导航3-1-1',
          }
        ]
      },
      {
        icon: 'Document',
        index: '3-2',
        name: '导航3-2',
      }
    ]
  }
]
</script>

<style lang='scss' scoped>
.menu {
  display: flex;
  justify-content: space-between;
}
</style>