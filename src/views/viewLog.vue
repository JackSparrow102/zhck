<template lang='html'>
<!-- 查看日志 -->
    <div id="index">
        <mu-card-title title="日志展示"></mu-card-title>
        <mu-container>
            <mu-col span="12" lg="4" sm="6">
            <mu-text-field v-model="value1" label="请输入操作人" label-float  style="width: 97%"></mu-text-field><br/>
            <mu-text-field v-model="value2" label="请输入商品名称" label-float  style="width: 97%"></mu-text-field><br/>
                <mu-date-input v-model="value3" label="选择日期" label-float full-width></mu-date-input>
            </mu-col>
        </mu-container>
        <mu-container class="button-wrapper">
          <mu-flex justify-content="center" align-items="center">
            <mu-button full-width color="primary">查询日志</mu-button>
          </mu-flex>
        </mu-container class="button-wrapper">

        <el-table
    :data="tableData"
    border
    style="width:90%;margin:20px auto;">
    <el-table-column prop="person" label="操作人" width="110">
    </el-table-column>
    <el-table-column prop="opera" label="具体操作" width="110">
    </el-table-column>
    <el-table-column prop="name" label="产品名" width="110">
    </el-table-column>
    <el-table-column prop="opri" label="产品原价" width="110">
    </el-table-column>
    <el-table-column prop="npri" label="产品现价" width="110">
    </el-table-column>
    <el-table-column prop="ostock" label="产品原数量" width="80">
    </el-table-column>
    <el-table-column prop="nstock" label="产品现数量" width="80">
    </el-table-column>
    <el-table-column prop="date" label="操作日期" width="100">
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="80">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">
          删除日志
        </el-button>
      </template>
    </el-table-column>
  </el-table>
    </div> 
</template>

<script>
import _ from 'lodash';
export default {
  name: 'index',
  components: {},
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
       tableData: [{
          person: 'wgrw',
          opera: '下架商品',
          name: '王小虎',
          opri: '55555',
          npri: '2222',
          ostock: '2',
          nstock: '4',
          date: '2016-05-03'
        }, {
          person: 'wgrw',
          opera: '修改价格',
          name: '王小虎',
          opri: '55555',
          npri: '2222',
          ostock: '2',
          nstock: '4',
          date: '2016-05-03'
        }, {
          person: 'wgrw',
          opera: '下架商品',
          name: '王小虎',
          opri: '55555',
          npri: '2222',
          ostock: '2',
          nstock: '4',
          date: '2016-05-03'
        }, {
          person: 'wgrw',
          opera: '下架商品',
          name: '王小虎',
          opri: '55555',
          npri: '2222',
          ostock: '2',
          nstock: '4',
          date: '2016-05-03'
        }]
     
    };
  },
  computed: {},
  created() {
    
  },
  methods: {
   handleClick(row) {
        console.log(row);
      }
  },
};
</script>

<style lang="less">
.button-wrapper {
  text-align: center;
  .mu-button{
    margin: 8px;
    vertical-align: middle;
  }
  a.mu-button {
    text-decoration: none;
  }
}
.mu-input {
  margin-bottom: 0px!important;
}
</style>


<style scoped>
@import '../assets/style/Font-Awesome-master/css/font-awesome.css';
@import '../assets/style/layout/base-Layout-bootstrap.css';
@import '../assets/style/base-style-bootstrap.css';
</style>
