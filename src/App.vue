<template>
  <div id="app">
    <body>
      <!-- <div v-show="isLogin()">
        <router-view/>
      </div> -->
      <div class="base-wrapper" v-show="!isLogin()">
        <Header></Header>
        <!-- <mu-button color="primary" style="margin-left: 16px" @click="open = !open">
          ===
        </mu-button>
        <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
          <mu-list>
            <sideMenu style="float:left;"></sideMenu>
            <mu-list-item button>
              <mu-list-item-title>
                <router-link :to="{name:'ckgl'}">Go to aaa</router-link>
              </mu-list-item-title>
            </mu-list-item>
            <mu-list-item button>
              <mu-list-item-title>
                bbb
              </mu-list-item-title>
            </mu-list-item>
            <mu-list-item button>
              <mu-list-item-title>
                ccc
              </mu-list-item-title>
            </mu-list-item>
            <mu-list-item button>
              <mu-list-item-title>
                ddd
              </mu-list-item-title>
            </mu-list-item>
            <mu-list-item  @click="open = false" button>
              <mu-list-item-title>Close</mu-list-item-title>
            </mu-list-item>
          </mu-list>
        </mu-drawer> -->
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
      // docked: false,
      // open: false,
      // position: 'left'
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
