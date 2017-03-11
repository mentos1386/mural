<template>
  <div class="container">
    <div class="section">
      <main-header :title="title"></main-header>
      <pagination :pageCount="pagination.pages" :current="pagination.current" :pageHandler="toPage"></pagination>
    </div>
    <div class="section">
      <div class="columns is-multiline is-mobile">
        <grid-block v-for="wallpaper in wallpapers"
                    :wallpaper="wallpaper"
                    class="column is-one-quarter"></grid-block>
      </div>
    </div>
  </div>
</template>

<script>
  import { getAllWallpapers } from '../services/desktoppr';
  import GridBlock from './WallpapersGrid/GridBlock.vue';
  import MainHeader from './MainHeader.vue';
  import Pagination from './Pagination.vue';

  export default {
    components: {
      GridBlock,
      MainHeader,
      Pagination,
    },
    props: {
      page: {
        type: Number,
        default: 1,
      },
    },
    data() {
      return {
        title: 'Home',
        wallpapers: [],
        pagination: {},
      };
    },
    beforeRouteEnter(to, from, next) {
      getAllWallpapers(to.params.page)
      .then((data) => {
        next(vm => {
          vm.wallpapers = data.response;
          vm.pagination = data.pagination;
        });
      });
    },
    watch: {
      $route() {
        this.wallpapers = null;
        this.pagination = null;
        getAllWallpapers(this.$route.params.page)
        .then((data) => {
          this.wallpapers = data.response;
          this.pagination = data.pagination;
        });
      },
    },
    methods: {
      toPage(page) {
        return `/home/${page}`;
      },
    },
  };
</script>
