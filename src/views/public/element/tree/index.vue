<!--tree-->
<template>
  <div class="main">
    <aside class="aside-style">
      <el-input
          placeholder="输入关键字进行过滤"
          v-model="filterText">
      </el-input>
      <el-tree
          class="filter-tree"
          :data="data"
          :props="defaultProps"
          default-expand-all
          :filter-node-method="filterNode"
          ref="tree">
      </el-tree>
    </aside>

    <article class="main-style">
      <div class="main-content">
        <details>
          <summary style="cursor: pointer;user-select: none">Epcot Center</summary>
          <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
        </details>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {},
  data() {
    return {
      filterText: '',
      data: [
          {
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  mounted() {

  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  }
}
</script>

<style scoped lang='scss'>
.main{
  height: 100%;

  .aside-style{
    width: 200px;
    height: 100%;
    float: left;
  }

  .main-style{
    width: calc(100% - 200px);
    height: 100%;
    margin-left: 200px;
    padding: 0 0 0 10px;

    .main-content{
      width: 100%;
      margin-left: unset;
      height: 100%;
      background-color: red;

    }
  }
}
</style>