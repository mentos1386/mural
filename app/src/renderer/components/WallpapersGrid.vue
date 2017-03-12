<template>
  <div class="container">
    <div class="section">
      <main-header :title="title"></main-header>
    </div>
    <div class="columns is-multiline is-mobile">
      <grid-block v-for="wallpaper in wallpapers"
                  :wallpaper="wallpaper"
                  class="column is-half">
      </grid-block>
    </div>
    <div class="section has-text-centered">
      <button v-on:click="nextPage()" class="button is-medium is-primary is-outlined">
        More Wallpapers
      </button>
    </div>
  </div>
</template>

<script>
  import { getAllWallpapers } from '../services/desktoppr';
  import GridBlock from './WallpapersGrid/GridBlock.vue';
  import MainHeader from './MainHeader.vue';

  export default {
    components: {
      GridBlock,
      MainHeader,
    },
    data() {
      return {
        title: 'Wallpapers',
        wallpapers: [],
        pagination: {
          pages: 1,
          current: 1,
          next: 2,
        },
      };
    },
    beforeRouteEnter(to, from, next) {
      getAllWallpapers(1)
      .then((data) => {
        next(vm => {
          vm.wallpapers = data.response;
          vm.pagination = data.pagination;
        });
      });
    },
    methods: {
      nextPage() {
        console.log(this);// eslint-disable-line
        getAllWallpapers(this.pagination.next)
        .then((data) => {
          this.wallpapers = this.wallpapers.concat(data.response);
          this.pagination = data.pagination;
        });
      },
    },
  };
</script>
