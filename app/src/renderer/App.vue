<template>
  <content>
    <top-menu></top-menu>
    <router-view></router-view>
    <bottom-menu></bottom-menu>
  </content>
</template>

<script>
  import TopMenu from './components/TopMenu.vue';
  import BottomMenu from './components/BottomMenu.vue';
  import store from './vuex/store';

  export default {
    components: {
      TopMenu,
      BottomMenu,
    },
    store,
  };
</script>

<style>

</style>
