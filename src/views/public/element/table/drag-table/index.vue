<!-- 拖拽表格 -->
<!--指标表配置-->
<template>
  <div class="main-body">
    <div class="content-wrap">
      <el-form :inline="true" :model="formInline">
        <el-row class="row-style">
          <el-col :span="8">
            <el-form-item label="指标表名:">
              <el-input v-model.trim="formInline.unionTableName" placeholder="请输入指标表名" v-filterSpecialChar clearable class="input-select-width"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="主表:" >
              <el-select v-model="formInline.tableName" clearable placeholder="请选择主表-表名" class="input-select-width-dialog">
                <el-option v-for="item in option" :key="item.tableName" :label="item.tableComment" :value="item.tableName"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <!-- 底部按钮 -->
        <el-row>
          <el-col>
            <el-form-item>
              <el-button type="primary" size="small" @click="search('search')">查询</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="small" @click="add('search')">新建</el-button>
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>
      <!--   table列表   -->
      <el-row>
        <el-table :data="tableData" border style="width: 100%" :stripe="true">
          <el-table-column type="index" label="序号" width="60" align="center" :index="index => {return index + 1 + (page.currentPage - 1) * page.pageSize;}"></el-table-column>
          <el-table-column prop="unionTableName" label="指标表名" :show-overflow-tooltip="true" align="center"></el-table-column>
          <el-table-column prop="tableName" label="主表名" :show-overflow-tooltip="true" align="center"></el-table-column>
          <el-table-column prop="subTableName" label="副表名" :show-overflow-tooltip="true" align="center"></el-table-column>
          <el-table-column prop="createTime" label="创建时间" :show-overflow-tooltip="true" align="center"></el-table-column>

          <el-table-column prop="processCode" label="操作" :show-overflow-tooltip="true" align="center">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="details(scope.row)">详情</el-button>
              <el-button type="text" size="small" @click="remove(scope.row)" >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>

      <!--  弹出框-新建表配置  -->
      <el-dialog title="新建表配置"  :visible.sync="showOperation" :modal="false" :show-close="true" :close-on-click-modal="false" :close-on-press-escape="false" center>
        <el-form :model="operation" ref="operation" :rules="operationRules" label-width="130px" label-position="right" class="operation">
          <el-form-item label="指标表名称:" prop="unionTableName">
            <el-input v-model.trim="operation.unionTableName" placeholder="请输入指标表名称" v-filterSpecialChar clearable class="input-select-width-dialog"></el-input>
          </el-form-item>
          <el-form-item label="主表-表名:" prop="primaryTabName">
            <el-select v-model="operation.primaryTabName" clearable placeholder="请选择主表-表名" class="input-select-width-dialog" @change="selectPrimaryTable">
              <el-option v-for="item in primaryTable" :key="item.tableName" :label="item.tableComment" :value="item.tableName"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="主表-选择字段:" prop="primaryColsName">
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllPrimaryTableColumnsChange">全选</el-checkbox>
            <div style="margin: 10px 0;"></div>
            <el-checkbox-group v-model="operation.primaryColsName" @change="handlePrimaryTableColumnsChange">
              <el-checkbox v-for="item in primaryTableColumns" :label="item" :key="item.columnName" >{{`${item.columnName}-${item.columnComment}`}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <!-- 添加副表 -->
          <div style="border-top: 2px solid #ddd; padding: 10px 0;margin-bottom:20px;" v-show="isShow" v-for="(auxiliary,index) in operation.targetSecondaryTableDtos" :key="index">
            <h2>{{`副表${index}:`}}</h2>
            <el-form-item :label="'副表'+index+'-表名:'" :prop="`targetSecondaryTableDtos[${index}].secondaryTabName`" :rules="[{required:true,message:'请选择副表表名',trigger:'change'}]">
              <el-select v-model="auxiliary.secondaryTabName" clearable placeholder="请选择副表-表名" class="input-select-width-dialog" @change="selectAuxiliaryTable1(index)">
                <el-option v-for="item in primaryTable" :key="item.tableName" :label="item.tableComment" :value="item.tableName"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item :label="'副表'+index+'-关联字段:'" >
              <el-form-item label="主表:" :prop="`targetSecondaryTableDtos[${index}].primaryRelationCol`" label-width="55px" :rules="[{ required: true, message: '请选择主表', trigger: 'change' }]">
                <el-select v-model="auxiliary.primaryRelationCol" clearable placeholder="请选择关联字段主表" class="input-select-width-dialog">
                  <el-option v-for="item in auxiliaryTable2[index]" :key="item.columnName" :label="item.columnComment" :value="item.columnName"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="副表:" :prop="`targetSecondaryTableDtos[${index}].secondaryRelationCol`" label-width="55px" :rules="[{ required: true, message: '请选择副表', trigger: 'change' }]">
                <el-select v-model="auxiliary.secondaryRelationCol" clearable placeholder="请选择关联字段副表" class="input-select-width-dialog">
                  <el-option v-for="item in auxiliaryTable3[index]" :key="item.columnName" :label="item.columnComment" :value="item.columnName"></el-option>
                </el-select>
              </el-form-item>
            </el-form-item>
            <!--      副表字段      -->
            <el-form-item :label="'副表'+index+'-选择字段:'" :prop="`targetSecondaryTableDtos[${index}].secondaryColsName`" :rules="[{ required: true, message: '请选择副表字段', trigger: 'change' }]">
              <el-checkbox v-model="checkAuxiliaryAll[index]" @change="checkAllAuxiliaryTableColumns(index,checkAuxiliaryAll[index])">全选</el-checkbox>
              <div style="margin: 10px 0;"></div>
              <el-checkbox-group v-model="auxiliary.secondaryColsName" @change="handleAuxiliaryTableColumns(index,auxiliary.secondaryColsName)">
                <el-checkbox v-for="item in auxiliaryTableColumns[index]" :label="item" :key="item.columnName" >{{`${item.columnName}-${item.columnComment}`}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>

          </div>
          <!--    添加副表      -->
          <el-form-item>
            <el-button type="primary" size="small" @click="addAuxiliaryTable()">添加副表</el-button>
            <el-button type="primary" size="small" @click="delAuxiliaryTable()">减少副表</el-button>
          </el-form-item>
        </el-form>
        <div style="text-align: center">
          <el-button type="primary" @click="submitForm('operation')">确定</el-button>
          <el-button type="danger" @click="cancelOperation()">取消</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>

export default {
  name: "index.vue",
  data() {
    return {
      //查询条件
      formInline: {
        unionTableName:"",//指标表名称
        tableName: "",//主表
      },
      option:[],
      tableData: [], //数据表格
      page: {
        currentPage: 1, // 当前页
        pageSize: 10, // 每页显示条数
        total: 0
      },
      //弹出框
      operation:{
        unionTableName:"",
        primaryTabName:"",
        primaryColsName:[],
        targetSecondaryTableDtos:[]
      },
      showOperation:false,
      operationRules:{
        unionTableName: [{ required: true, message: "请输入指标表名称", trigger: "blur" }],
        primaryTabName: [{ required: true, message: "请选择主表-表名", trigger: "change" }],
        primaryColsName: [{ required: true, message: "主表-选择字段", trigger: "change" }],
      },
      //主表
      primaryTable:[],//主表-表名
      //复选框
      checkAll: false,
      primaryTableColumns: [],
      isIndeterminate: false,
      //副表
      isShow:false,
      auxiliaryTable2:[],//关联主表下拉列表
      auxiliaryTable3:[],//关联副表下拉列表
      //副表复选
      checkAuxiliaryAll:[],
      auxiliaryTableColumns:[],

    };
  },
  methods: {
    //点击搜索 分页
    search(type) {
      let obj = {};
      if (type === "search") {
        this.page.currentPage = 1;
      }
      obj = {
        pageSize: this.page.pageSize,
        pageNum: this.page.currentPage,
        unionTableName:this.formInline.unionTableName,
        tableName:this.formInline.tableName
      };

    },

    //新建
    add(){
      this.operation = {
        unionTableName:"",
        primaryTabName:"",
        primaryColsName:[],
        targetSecondaryTableDtos:[]
      };
      this.primaryTable=[];
      this.checkAll= false;
      this.primaryTableColumns= [];
      this.isIndeterminate=false;
      this.auxiliaryTable2=[];
      this.auxiliaryTable3=[];
      this.checkAuxiliaryAll=[];
      this.auxiliaryTableColumns=[];

      this.showOperation = true;
    },
    //获取主表表名
    getPrimaryTableName(){

    },
    //选择表名时加载字段
    selectPrimaryTable(){
    },
    //获取主表表字段
    getPrimaryTableColumns(obj){
    },
    //全选
    handleCheckAllPrimaryTableColumnsChange(val) {
      this.operation.primaryColsName = val ? this.primaryTableColumns : [];
      this.isIndeterminate = false;
    },
    //多选
    handlePrimaryTableColumnsChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.primaryTableColumns.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.primaryTableColumns.length;
    },

    /*------副表------*/
    selectAuxiliaryTable1(index){
      this.getAuxiliaryTableColumns({tableName: this.operation.targetSecondaryTableDtos[index].secondaryTabName}, index);
    },
    //获取副表-表字段
    getAuxiliaryTableColumns(obj,index){
      getPrimaryTableColumns(obj).then( res => {
        if(res.status === 200){
          this.$nextTick( () => {
            this.auxiliaryTableColumns[index] = res.data;
            //添加主表内容
            if(index === 0){
              this.auxiliaryTable2[index] = this.primaryTableColumns;
            }else{
              this.auxiliaryTable2[index] = this.auxiliaryTableColumns[index - 1];
            }
            //添加副表内容
            this.auxiliaryTable3[index] = this.auxiliaryTableColumns[index];

            this.$forceUpdate();
          })
        }
      })
    },

    //副表全选
    checkAllAuxiliaryTableColumns(index,val) {
      this.operation.targetSecondaryTableDtos[index].secondaryColsName = val ? this.auxiliaryTableColumns[index] : [];
    },
    //副表多选
    handleAuxiliaryTableColumns(index,value) {
      let checkedCount = value.length;
      this.checkAuxiliaryAll[index] = checkedCount === this.auxiliaryTableColumns[index].length;
    },
    //添加副表
    addAuxiliaryTable(){
      this.isShow = true;
      if(this.operation.targetSecondaryTableDtos.length >= 0 && this.operation.targetSecondaryTableDtos.length < 9){
        this.operation.targetSecondaryTableDtos.push(
            {
              "secondaryTabName": "",
              "primaryRelationCol": "",
              "secondaryRelationCol": "",
              "secondaryColsName": []
            }
        );
        this.auxiliaryTable2.push([]);
        this.auxiliaryTable3.push([]);
        this.checkAuxiliaryAll.push(false);
        this.auxiliaryTableColumns.push([]);
      }else {
        this.$message.warning("已经达到添加副表上线！")
      }

    },
    //减少副表
    delAuxiliaryTable(){
      if( this.operation.targetSecondaryTableDtos.length > 0 ){
        this.operation.targetSecondaryTableDtos.splice((this.operation.targetSecondaryTableDtos.length - 1),1);
        this.auxiliaryTable2.splice((this.auxiliaryTable2.length - 1),1);
        this.auxiliaryTable3.splice((this.auxiliaryTable3.length - 1),1);
        this.checkAuxiliaryAll.splice((this.checkAuxiliaryAll.length - 1),1);
        this.auxiliaryTableColumns.splice((this.auxiliaryTableColumns.length - 1),1);
      }else{
        this.$message.warning("已经没有可以删除的副表！")
      }
    },

    //提交
    submitForm(formName){
      this.$refs[formName].validate(valid => {
        let obj = {};
        for (let index in this.operation) {
          if (this.operation[index] !== "" && this.operation[index] !== null) {
            obj[index] = this.operation[index];
          }
        }
        console.log("我获取到的是什么值==",obj);
        if(valid){
          this.$message.success("添加成功");
          this.showOperation = false;
          // getSaveTabsCols(obj).then( res => {
          //   if(res.status === 200){
          //     this.$message.success("添加成功");
          //     this.showOperation = false;
          //     this.search('search');
          //   }
          // })
        }
      })
    },
    //关闭弹出窗口
    cancelOperation(){
      this.showOperation = false;
      this.operation = {
        unionTableName:"",
        primaryTabName:"",
        primaryColsName:[],
        targetSecondaryTableDtos:[]
      };
      this.primaryTable=[];
      this.checkAll= false;
      this.primaryTableColumns= [];
      this.isIndeterminate=false;
      this.auxiliaryTable2=[];
      this.auxiliaryTable3=[];
      this.checkAuxiliaryAll=[];
      this.auxiliaryTableColumns=[];
    },
    //-----------------------------------------------------
    //删除
    remove(){

    },
    //详情
    details(){

    },

  },
  mounted() {
    this.search('search');
    this.getPrimaryTableName();
  },

}
</script>

<style lang="scss" scoped>
.main-body {
  width: 100%;
  height: 100%;
  .content-wrap {
    padding: 28px 28px 0 28px;
    height: 100%;
    /* 新增默认显示一行查询条件，多余的查询条件隐藏 */
    .row-style {
      padding-right: 50px;
      position: relative;
      .target-button {
        position: absolute;
        right: 0;
        top: 0;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        border: 1px solid #ddd;
        cursor: pointer;
        text-align: center;

        .i-button {
          margin-top: 5px;
          display: inline-block;
          transform: rotate(0deg);
          transition: transform 0.5s;
          animation: translate 1s linear infinite;
        }
      }
      .target-button-click {
        position: absolute;
        right: 0;
        top: 0;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        border: 1px solid #ddd;
        cursor: pointer;
        text-align: center;
        .i-button {
          margin-top: 5px;
          display: inline-block;
          transform: rotate(180deg);
          transition: transform 0.5s;
        }
      }
      @keyframes translate {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(6px);
        }
        100% {
          transform: translateY(0px);
        }
      }
      @keyframes rotatefresh {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(180deg);
        }
      }
    }
    .input-select-width {
      width: 200px !important;
    }
    .input-select-width-dialog {
      width: 100% !important;
    }
    .disabledButton {
      color: #fff;
      background-color: #999;
      border-color: #999;
      //pointer-events: none;
      cursor: not-allowed;
    }
    .disabledButton:focus,
    .disabledButton:hover{
      background-color: #999;
      border-color: #999;
      box-shadow: 0px 0px 10px rgba(150, 149, 148, 0.8);
    }
  }
}
</style>