<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/common/Header.vue';
  import Footer from '@/components/common/Footer.vue';

  export default {
    components: {
      Header,
      Footer
    }
  };
</script>

<style lang="less">
#app {
  height: 100%;
  width: 100%;
  padding-top: 64px;
  font-size: 14px;
}
</style>
