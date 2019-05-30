 <template>
 <!-- 登陆 -->
  <div>
    <mu-card-title title="请选择登陆用户"  ></mu-card-title>
    <mu-container class="button-wrapper">
        <mu-flex justify-content="center" align-items="center">
        <mu-button full-width color="primary"  to="landing">自营店登陆</mu-button>
        </mu-flex>
    </mu-container>
    <mu-container class="button-wrapper" >
        <mu-flex justify-content="center" align-items="center">
        <mu-button full-width color="primary"  to="landing">个人店登陆</mu-button>
        </mu-flex>
    </mu-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
      
    };
  },
  created() {
   
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
