<template lang='html'>
<!-- 商品管理 -->
    <div id="index">
      <mu-card-title title="商品管理"></mu-card-title>
        <el-table :data="tableData" border style="width: 96%">
          <el-table-column  prop="num" label="店铺编号" width="150">
          </el-table-column>
          <el-table-column prop="name"  label="店铺名称" width="120">
          </el-table-column>
          <el-table-column  fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small" >
                <router-link to='/commodityManagement1'> 查询店中商品</router-link>
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
    tableData: [{
          num: '2016-05-03',
          name: '李小虎'
        }, 
        {
          num: '2016-05-02',
          name: '张小虎'
        }, 
        {
          num: '2016-05-04',
          name: '王小虎'
        }, 
        {
          num: '2016-05-01',
          name: '赵小虎'
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

<style>

</style>


<style scoped>
@import '../assets/style/Font-Awesome-master/css/font-awesome.css';
@import '../assets/style/layout/base-Layout-bootstrap.css';
@import '../assets/style/base-style-bootstrap.css';
</style>
