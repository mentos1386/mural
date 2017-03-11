<template>
  <div class="heading">
    <h1 class="title">{{title}}</h1>
    <h3 class="subtitle" v-if="subtitle">{{subtitle}}</h3>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      subtitle: {
        type: String,
      },
    },
  };
</script>
