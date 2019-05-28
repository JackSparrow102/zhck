<template lang='html'>
  <div id="index">
      <div class="card-header">
                            <h3 class="card-title">商品管理</h3>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="form-group row">
                                    <label for="goodsNumEdit" class="col-sm-2 col-form-label">商品货号</label>
                                    <div class="col-sm-10">
                                        <input type="text" readonly class="form-control-plaintext" id="goodsNumEdit" value="1234567890">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="goodsNameEdit" class="col-sm-2 col-form-label">商品名称</label>
                                    <div class="col-sm-10">
                                        <input type="text" readonly class="form-control-plaintext" id="goodsNameEdit" value="虎皮兰花大金边盆栽净化空气室内长寿花卉办公桌琴叶榕树">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="goodsClassEdit" class="col-sm-2 col-form-label">类型</label>
                                    <div class="col-sm-10">
                                        <input type="text" readonly class="form-control-plaintext" id="goodsClassEdit" value="植物">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="goodsNumber" class="col-sm-2 col-form-label">商品数量</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="goodsNumber" value="50">
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer">
                            <div class="form-group row">
                                <label class="col-sm-1 col-form-label"></label>
                                <div class="col-sm-11"><button type="submit" class="btn btn-primary">保存</button></div>
                            </div>
                        </div>
  </div> 
</template>

<script>
import _ from 'lodash';
export default {
  name: 'index',
  components: {},
  data() {
    return {
     
     
    };
  },
  computed: {},
//   created() {
//     this.search();
//   },
  methods: {
    
    // changea(){
    //   console.log(this.value1)
    // }
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
