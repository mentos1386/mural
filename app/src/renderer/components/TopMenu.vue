<template>
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <p class="nav-item">Mural</p>
        <router-link class="nav-item is-tab is-hidden-mobile" :to="{ name: 'home'}">
          Home
        </router-link>
        <router-link class="nav-item is-tab is-hidden-mobile" to="/favorites">Favorites
        </router-link>
        <router-link class="nav-item is-tab is-hidden-mobile" to="/settings">Settings</router-link>
      </div>
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>
  </nav>
</template>

<script>
  export default {};
</script>
