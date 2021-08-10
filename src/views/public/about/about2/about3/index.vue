<template>
<div>
  <el-table :data="tableData" style="width: 100%" max-height="250" border>
    <el-table-column fixed prop="date" label="日期" width="100" align="center"></el-table-column>
    <el-table-column prop="name" label="姓名" align="center"></el-table-column>
    <el-table-column prop="province" label="省份" align="center"></el-table-column>
    <el-table-column prop="city" label="市区" align="center"></el-table-column>
    <el-table-column prop="address" label="地址" align="center"></el-table-column>
    <el-table-column prop="zip" label="邮编" align="center"></el-table-column>
    <el-table-column fixed="right" label="操作" width="80" align="center">
      <template #default="scope">
        <el-button @click.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">移除</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  name: "index",
  components: {},
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ]
    }
  },
  mounted() {

  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  }
}
</script>

<style scoped lang='scss'>

</style>