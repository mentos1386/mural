<template>
  <div class="container">
    <div class="section">
      <main-header :title="title"></main-header>
    </div>
  </div>
</template>

<script>
  import MainHeader from './MainHeader.vue';

  export default {
    components: {
      MainHeader,
    },
    data() {
      return {
        title: 'Home',
      };
    },
  };
</script>
