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

  export default {
    components: {
      TopMenu,
      BottomMenu,
    },
  };
</script>

<style>

</style>
