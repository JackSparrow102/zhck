<template lang='html'>
<!-- 商品管理-1 -->
    <div id="index">
        <mu-card-title title="店铺SET%……*"></mu-card-title>
        <mu-container>
          <mu-text-field v-model="value1" label="请输入商品货号" prefix="~" label-float  style="width: 96%"></mu-text-field><br/>
          <mu-text-field v-model="value2" label="请输入商品名称" prefix="~" label-float  style="width: 96%"></mu-text-field><br/>
        </mu-container>
        <mu-container class="button-wrapper">
          <mu-flex justify-content="center" align-items="center">
            <mu-button full-width color="primary">搜索商品</mu-button>
          </mu-flex>
        </mu-container>

        <el-table
    :data="tableData"
    border
    style="width:90%;margin:20px auto;">
    <el-table-column prop="img" label="商品图片" width="150">
    </el-table-column>
    <el-table-column prop="name" label="名称" width="120">
    </el-table-column>
    <el-table-column prop="num" label="货号" width="120">
    </el-table-column>
    <el-table-column prop="stock" label="库存" width="120">
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">
          <router-link to='/commodityManagement2'>查看</router-link>
        </el-button>
        <el-button type="text" size="small">下架</el-button>
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
       tableData: [{
          img: ' ',
          name: '王小虎',
          num: '上海',
          stock: '普陀区'
        }, {
          img: ' 2',
          name: '王小虎',
          num: '上海',
          stock: '普陀区'
        }, {
          img: ' ',
          name: '王小虎',
          num: '上海',
          stock: '普陀区'
        }, {
          img: ' ',
          name: '王小虎',
          num: '上海',
          stock: '普陀区'
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
  margin-bottom: 0px;
}
</style>


<style scoped>
@import '../assets/style/Font-Awesome-master/css/font-awesome.css';
@import '../assets/style/layout/base-Layout-bootstrap.css';
@import '../assets/style/base-style-bootstrap.css';
</style>
