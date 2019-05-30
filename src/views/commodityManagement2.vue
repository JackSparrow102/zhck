<template lang='html'>
<!-- 商品管理-2 -->
    <div id="index">
        <mu-card-title title="商品管理"></mu-card-title>
            <mu-carousel hide-controls style="height:44vw;width:90%;margin:20px auto;">
            <mu-carousel-item>
                <img :src="carouselImg1">
            </mu-carousel-item>
            <mu-carousel-item>
                <img :src="carouselImg2">
            </mu-carousel-item>
            <mu-carousel-item>
                <img :src="carouselImg3">
            </mu-carousel-item>
            <mu-carousel-item>
                <img :src="carouselImg4">
            </mu-carousel-item>
        </mu-carousel>

        <el-table :data="tableData" border style="width:90%;margin:20px auto;">
            <el-table-column prop="img" label="商品图片" width="150">
            </el-table-column>
            <el-table-column prop="num" label="商品货号" width="120">
            </el-table-column>
            <el-table-column prop="Category" label="商品类别" width="100">
            </el-table-column>
            <el-table-column prop="Specif" label="商品规格" width="120">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="90">
            <template slot-scope="scope">
                <el-button type="text" @click="dialogFormVisible = true">编辑</el-button>
                <el-button type="text" size="small">下架</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-dialog title="编辑" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="修改进价" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="修改库存" :label-width="formLabelWidth">
                <el-input v-model="form.stock" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
       <!--  <mu-container>
  <mu-flex justify-content="center">
    <mu-button @click="openAlertDialog">Open Dialog</mu-button>
  </mu-flex>
  <mu-dialog title="Use Google's location service?" width="600" max-width="80%" :esc-press-close="false" :overlay-close="false" :open.sync="openAlert">
    Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
    <mu-button slot="actions" flat color="primary" @click="closeAlertDialog">Disagree</mu-button>
    <mu-button slot="actions" flat color="primary" @click="closeAlertDialog">Agree</mu-button>
  </mu-dialog>
</mu-container> -->
    </div> 
</template>

<script>
import _ from 'lodash';
import carouselImg1 from '../assets/img/carousel1.jpg';
import carouselImg2 from '../assets/img/carousel2.jpg';
import carouselImg3 from '../assets/img/carousel3.jpg';
import carouselImg4 from '../assets/img/carousel4.jpg';
export default {
  name: 'index',
  components: {},
  data() {
    return {
        // openAlert: false,
        carouselImg1,
        carouselImg2,
        carouselImg3,
        carouselImg4,
        active: 0,
       tableData: [{
          img: ' ',
          num: '上海',
          Category: '王小虎',
          Specif: '普陀区'
        }, {
          img: ' 2',
          num: '上海',
          Category: '王小虎',
          Specif: '普陀区'
        }, {
          img: ' ',
          num: '上海',
          Category: '王小虎',
          Specif: '普陀区'
        }, {
          img: ' ',
          num: '上海',
          Category: '王小虎',
          Specif: '普陀区'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
     
    };
  },
  computed: {},
  created() {
    
  },
  methods: {
    // openAlertDialog () {
    //    this.openAlert = true;
    // },
    // closeAlertDialog () {
    //    this.openAlert = false;
    // },
  },
};
</script>

<style  > 
.mu-carousel-item img{
    height:44vw;
}
.el-dialog{
    width:92%!important;
}
.el-form-item__label {
    text-align: left!important;
    width:85px!important;
}
.el-form-item__content {
    margin-left: 85px!important;
}
.el-dialog__body {
    padding: 20px!important;
}
</style>


<style scoped>
@import '../assets/style/Font-Awesome-master/css/font-awesome.css';
@import '../assets/style/layout/base-Layout-bootstrap.css';
@import '../assets/style/base-style-bootstrap.css';
</style>
