<template>
  <div id="app">
    <body>
      <!-- <div v-show="isLogin()">
        <router-view/>
      </div> -->
      <!-- <div class="base-wrapper" v-show="!isLogin()"> -->
        <div class="base-wrapper">
        <!-- <Header></Header> -->
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
            <!-- <sideMenu style="float:left;"></sideMenu> -->

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
          <router-link :to="{'name':'storeManagement'}">
            <mu-list-item button :ripple="false">
              <mu-list-item-action title="店铺管理">
                <!-- <mu-icon value=""></mu-icon> -->
                <span class="iconfont">&#xe63e;</span>
              </mu-list-item-action>
              <mu-list-item-title>店铺管理</mu-list-item-title>
            </mu-list-item>
          </router-link>
          <mu-list-item button  to="/Index2">
            <mu-list-item-action title="查看日志">
              <!-- <mu-icon value=""></mu-icon> -->
              <span class="iconfont">&#xe60c;</span>
            </mu-list-item-action>
            <mu-list-item-title>查看日志</mu-list-item-title>
          </mu-list-item>

           <mu-list-item button to="/Index3">
            <mu-list-item-action title="日志复原">
              <!-- <mu-icon value=""></mu-icon> -->
              <span class="iconfont">&#xe718;</span>
            </mu-list-item-action>
            <mu-list-item-title>日志复原</mu-list-item-title>
          </mu-list-item>

          <mu-list-item button  to="/Index4">
            <mu-list-item-action title="修改密码">
              <!-- <mu-icon value=""></mu-icon> -->
              <span class="iconfont">&#xe626;</span>
            </mu-list-item-action>
            <mu-list-item-title>修改密码</mu-list-item-title>
          </mu-list-item>
            
            
            <mu-list-item button to="/Index5">
              <mu-list-item-title>
                ddd
              </mu-list-item-title>
            </mu-list-item>
            <mu-list-item  @click="open = false" button>
              <mu-list-item-title>Close</mu-list-item-title>
            </mu-list-item>
          </mu-list>
        </mu-drawer> 
        <!-- 路由、展示的主界面 -->
        <router-view/>
        </div>
    </body>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
// import sideMenu from '@/components/sideMenu.vue';
export default {
  data() {
    return {
      docked: false,
      open: false,
      position: 'left',
      userinfo: {}
    };
  },
  components: {
    Header,
    // sideMenu,
  },
  mounted() {
  },
  methods: {
    isLogin() {
      let routerPath = this.$route.name;
      if (routerPath.includes('Login')) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>


<style lang="less">
body {
  padding: 0;
  margin: 0;
  font-family: '微软雅黑';
  font-size: 16px;
  overflow: hidden;
}
</style>
