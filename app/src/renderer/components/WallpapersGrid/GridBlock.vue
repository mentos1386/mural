<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-16by9">
        <img :src="wallpaper.image.preview.url" alt="Image">
      </figure>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      wallpaper: {
        type: Object,
        required: true,
      },
    },
  };
</script>
