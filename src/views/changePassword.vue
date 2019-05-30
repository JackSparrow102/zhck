 <template>
  <div>
    <mu-card-title title="个人中心"></mu-card-title>
    <mu-container>
      <mu-text-field v-model="value1" label="初始密码" label-float  style="width: 96%"></mu-text-field><br/>
      <mu-text-field v-model="value2" label="新密码"  label-float  style="width: 96%"></mu-text-field><br/>
      <mu-text-field v-model="value2" label="确认密码"  label-float  style="width: 96%"></mu-text-field><br/>
    </mu-container>
    <mu-container class="button-wrapper" style="margin-top:30px;">
        <mu-flex justify-content="center" align-items="center">
        <mu-button full-width color="primary">确认修改</mu-button>
        </mu-flex>
    </mu-container>

  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "gf",
    };
  },
  created() {
    // this.query();
  },
  methods: {
  },
  computed: {
  }
};
</script>

<style scoped>

</style>


<style scoped>
@import "../assets/style/Font-Awesome-master/css/font-awesome.css";
@import "../assets/style/layout/base-Layout-bootstrap.css";
@import "../assets/style/base-style-bootstrap.css";
</style>
