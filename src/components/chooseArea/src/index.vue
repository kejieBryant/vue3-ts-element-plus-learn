<!--
 * @Author: kejie
 * @Date: 2022-04-14 14:14:54
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-14 15:41:10
 * @FilePath: \vue3-ts-element-plus-learn\src\components\chooseArea\src\index.vue
 * @Description: file content
-->
<template>
  <section class="area-select">
    <el-select 
      clearable
      filterable
      v-model="province"
      placeholder="请选择省份"
      @change="provinceChange"
    >
      <el-option
        v-for="item in allArea"
        :key="item.code"
        :label="item.name"
        :value="item.code"
      />
    </el-select>
    <el-select 
      clearable
      filterable
      :disabled="!province"
      v-model="city" 
      placeholder="请选择城市"
      @change="cityChange"
    >
      <el-option
        v-for="item in selectCities.data"
        :key="item.code"
        :label="item.name"
        :value="item.code"
      />
    </el-select>
    <el-select 
      clearable
      filterable
      :disabled="!province || !city"
      v-model="area" 
      placeholder="请选择区域"
      @change="areaChange"
    >
      <el-option
        v-for="item in selectAreas.data"
        :key="item.code"
        :label="item.name"
        :value="item.code"
      />
    </el-select>
  </section>
</template>

<script lang='ts' setup>
import { ref, reactive } from 'vue'
import AllArea from '../lib/pca-code.json'

interface DataType {
  name: string,
  code: string,
  children?: DataType[]
}

// 省市区全部数据
const allArea = AllArea
// 城市集合
let selectCities = reactive<{
  data: DataType[]
}>({
  data: []
});
// 区域集合
let selectAreas = reactive<{
  data: DataType[]
}>({
  data: []
});
// 省份下拉框的选值
const province = ref('');
// 城市下拉框选值
const city = ref('')
// 区域下拉框选值
const area = ref('')

// 省份下拉框选值改变事件
const provinceChange = (val: string) => {
  city.value = '';
  area.value = '';
  selectCities.data = []
  selectAreas.data = []
  if (val) {
    // 根据省份选值筛选城市下拉框数据源
    selectCities.data = allArea.find((data) => data.code === val)!.children || [];
  }
}

// 城市下拉框选值改变事件
const cityChange = (val: string) => {
  area.value = '';
  selectAreas.data = []
  if (val) {
    // 根据城市选值筛选区域下拉框数据源
    selectAreas.data = selectCities.data.find((data) => data.code === val)!.children || [];
  }
}

// 省市区均选值后向父组件发射事件
const emit = defineEmits(['change'])

// 区域下拉框选值改变事件
const areaChange = (val: string) => {
  if (val && province.value && city.value) {
    const provinceData = {
      name: allArea.find((data) => data.code === province.value)!.name,
      code: province.value
    }
    const cityData = {
      name: selectCities.data.find((data) => data.code === city.value)!.name,
      code: city.value
    }
    const areaData = {
      name: selectAreas.data.find((data) => data.code === val)!.name,
      code: val
    }
    emit('change', {
      province: provinceData,
      city: cityData,
      area: areaData
    })
  }
}

</script>

<style lang='scss' scoped>
.area-select {
  div+div {
    margin-left: 15px;
  }
}
</style>