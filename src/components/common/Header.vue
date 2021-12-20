<template>
  <div class="header-wrap">
    <img class="logo link-url" src="../../assets/images/logo.png"/>
    <ul class="link-outer-wrap">
      <li class="link-wrap link-url" v-for="(item, index) in getNavs" :key="index">
        <router-link class="link-content" :to="item.url">{{item.title}}</router-link>
      </li>
      <li style="display: none">
        <router-link to="/product">产品</router-link>
        <div class="second-nav">
          <div>
            <router-link to="/product1">智慧电力</router-link>
            <router-link to="/product2">智慧矿山</router-link>
          </div>
        </div>
      </li>
    </ul>
    <div class="login-wrap">
      <div class="login-item link-url">登陆</div>
      <div class="register-item link-url">注册</div>
      <img v-if="getNavs.length" @click="triggerMenu" class="menu-more link-url" src="../../assets/images/icons/menu_more.png">
    </div>
    <ul class="menu-outer-wrap" :class="menuActive ? 'active' : ''">
      <img @click="triggerMenu" class="menu-close link-url" src="../../assets/images/icons/close.png">
      <li @click="triggerMenu" class="menu-item-wrap link-url" v-for="(item, index) in getNavs" :key="index">
        <router-link class="menu-content" :to="item.url">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    data() {
      return {
        menuActive: false,
        links: [
          {
            title: '首页',
            url: '/'
          },
          {
            title: '解决方案',
            url: '/'
          },
          {
            title: '产品',
            url: '/product',
            subs: [
              { title: '产品1', url: '/' },
              { title: '产品2', url: '/' }
            ]
          },
          {
            title: '工业标识解析',
            url: '/'
          },
          {
            title: '应用超市',
            url: '/'
          },
          {
            title: '开发者中心',
            url: '/'
          },
          {
            title: '工业应用',
            url: '/'
          },
          {
            title: '移动专区',
            url: '/'
          }
        ]
      };
    },
    computed: {
      ...mapGetters('common', ['getNavs'])
    },
    methods: {
      triggerMenu () {
        console.log('tkyj+++', this.menuActive);
        this.menuActive = !this.menuActive;
      }
    },
    mounted() {
      this.$store.dispatch('common/FETCH_NAVS', { test: 1 });
    }
  };
</script>

<style lang="less" scoped>
  .header-wrap {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    transition: top 0.3s;
    padding: 0 24px;
    color: @blackColor;
    background: @whiteColor40;
    height: 64px;
    box-shadow: @greyShadow10;
    z-index: 99;
    white-space: nowrap;

    .logo {
      width: 245px;
      height: 30px;
      margin: 17px 77px 0 0;
      display: inline-block;
    }

    .link-outer-wrap {
      display: inline-block;
      vertical-align: top;
      .link-wrap {
        display: inline-block;
        margin: 15px 16px 0;
        padding: 6px 0;
        border-bottom: 2px solid transparent;
        height: 34px;
        &:hover, .active {
          border-bottom-color: @blueColor;
        }
      }
    }
    .login-wrap {
      float: right;
      margin-top: 16px;
      .login-item, .register-item {
        width: 60px;
        height: 32px;
        color: @blackColor;
        text-align: center;
        line-height: 32px;
        display: inline-block;
        vertical-align: top;
      }
      .register-item {
        color: @whiteColor;
        background: @blueColor;
        border-radius: 4px;
      }
      .menu-more {
        display: none;
        height: 32px;
        width: 32px;
        margin-left: 16px;
      }
    }
    .menu-outer-wrap {
      background: @whiteColor;
      width: 100%;
      height: 100%;
      position: fixed;
      left: 100%;
      top: 60px;
      transition: .3s all;
      padding: 24px;
      .menu-close {
        float: right;
        margin: -20px -20px 0 0;
        height: 24px;
        width: 24px;
      }
      &.active {
        left: 0;
      }
      .menu-item-wrap {
        height: 48px;
        line-height: 48px;
        border-bottom: 1px solid @greyColor;
        padding: 0 16px;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .header-wrap {
      .logo {
        margin-right: 40px;
      }
      .link-outer-wrap .link-wrap {
        margin: 15px 12px 0;
      }
    }
  }
  @media screen and (max-width: 1100px) {
    .header-wrap {
      .logo {
        margin-right: 40px;
      }
      .link-outer-wrap {
        display: none;
      }
      .login-wrap {
        .menu-more {
          display: inline-block;
        }
      }
      .menu-outer-wrap {
        display: block;
      }
    }
  }
  @media screen and (max-width: 520px) {
    .header-wrap {
      .logo {
        width: 196px;
        height: 24px;
        margin: 20px 0 0;
      }
    }
  }
</style>
