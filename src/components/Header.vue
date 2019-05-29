<template lang='html'>
  <div id="Header">
      <!-- <div class="base-header">
        <div class="base-header-left" id="menuHead">
          <img src="../assets/img/logo.png" alt="..." class="img-rounded">
        </div>
        <div class="base-nav" id="base-nav">
          <ul class="top-nav-ul">
            <li><a @click="$router.push('/')">首 &nbsp;&nbsp; 页</a></li>
          </ul>
          <div id="base-user">
            <a href="#" class="user-name" @mouseover="mopen('m1')" @mouseout="mclose()">{{userName}}<span class="button-down fa fa-caret-down"></span></a>
            <div id="m1" style="z-index:999;" @mouseover="mopen('m1')" @mouseout="mclose()">
              <a @click="$router.push({name:'UpdatePW'})"><i class="fa fa-lock base-margin-right-5"></i>修改密码</a>
              <a @click="logout()"><i class="fa fa-sign-out base-margin-right-5"></i>安全退出</a>
            </div>
          </div>
        </div>
      </div> -->
      
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="open = !open">
        <span class="iconfont">&#xe615;</span>
      </mu-button>
        仓库管理

      <mu-button flat slot="right">
        <mu-icon value="~"></mu-icon>
      </mu-button>
    </mu-appbar>

    <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
      <mu-list>
        <!-- <router-link :to="{'name':'login'}" v-if="!userinfo">
          <mu-list-item button :ripple="false">
            <mu-list-item-action title="登陆">
              <mu-icon value=""></mu-icon>
              
            </mu-list-item-action>
            <mu-list-item-title>登陆</mu-list-item-title>
          </mu-list-item>
        </router-link> -->
        <router-link :to="{'name':'person'}" v-if="userinfo">
          <mu-list-item button :ripple="false">
            <mu-list-item-action title="个人中心">
              <mu-avatar>
                <img  v-bind:src="userinfo.PicUrl">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-title>{{userinfo.UsereName}}</mu-list-item-title>

          </mu-list-item>
        </router-link>
        <mu-divider />
          <router-link :to="{'name':'goodsedit'}">
          <mu-list-item button :ripple="false">
            <mu-list-item-action title="店铺管理">
              <!-- <mu-icon value=""></mu-icon> -->
              <span class="iconfont">&#xe63e;</span>
            </mu-list-item-action>
            <mu-list-item-title>
              店铺管理</mu-list-item-title>
          </mu-list-item>
        </router-link>
        <router-link :to="{'name':'login'}">
          <mu-list-item button :ripple="false">
            <mu-list-item-action title="查看日志">
              <!-- <mu-icon value=""></mu-icon> -->
              <span class="iconfont">&#xe60c;</span>
            </mu-list-item-action>
            <mu-list-item-title>查看日志</mu-list-item-title>
          </mu-list-item>
        </router-link>
        <router-link :to="{'name':'login'}">
          <mu-list-item button :ripple="false">
            <mu-list-item-action title="日志复原">
              <!-- <mu-icon value=""></mu-icon> -->
              <span class="iconfont">&#xe718;</span>
            </mu-list-item-action>
            <mu-list-item-title>日志复原</mu-list-item-title>
          </mu-list-item>
        </router-link>
        <router-link :to="{'name':'login'}">
          <mu-list-item button :ripple="false">
            <mu-list-item-action title="修改密码">
              <!-- <mu-icon value=""></mu-icon> -->
              <span class="iconfont">&#xe626;</span>
            </mu-list-item-action>
            <mu-list-item-title>修改密码</mu-list-item-title>
          </mu-list-item>
        </router-link>
      </mu-list>
    </mu-drawer>
  </div>
</template>

<script>
// import { mapMutations, mapState } from 'vuex';
export default {
  name: 'Header',
  components: {},
  data() {
    return {
      // avatar: require('@/assets/img/8082.jpg'),
       docked: false,
        open: false,
        position: 'left',
        userinfo: {}
    };
  },
  computed: {
    // ...mapState({
    //   userName: state => state.userName,
    // }),
  },
  mounted() {
    // $('#base-nav').width($(window).width() - 241);
    // $(window).resize(function() {
    //   $('#base-nav').width($(window).width() - 241);
    // });
  },
  created() {
    // this.isLogin();
  },
  methods: {
    // ...mapMutations(['isLogout', 'isLogin']),
    // mopen(id) {
    //   // this.mcancelclosetime();
    //   if (this.ddmenuitem) this.ddmenuitem.style.visibility = 'hidden';
    //   this.ddmenuitem = document.getElementById(id);
    //   this.ddmenuitem.style.visibility = 'visible';
    // },
    // mclose() {
    //   if (this.ddmenuitem) this.ddmenuitem.style.visibility = 'hidden';
    // },
    // logout() {
    //   // sessionStorage.removeItem('userInfo');
    //   this.isLogout();
    //   this.$router.push({ path: '/LoginPage' });
    // },
  },
};
</script>

<style lang='css' scoped>
/* .base-nav ul.top-nav-ul li a {
    color: #4f5151 !important;
}
.base-nav ul.top-nav-ul li a:hover {
    color: #fff !important;
}
#base-user a.user-name {
    color: #4f5151 !important;
}
#base-user a.user-name:hover {
    color: #5bc0de !important;
}
#base-user div a {
    color: #4f5151 !important;
}
#base-user div a:hover {
    color: #fff !important;
} */
</style>
