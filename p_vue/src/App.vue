<template>
  <div class="home">
    <nav_bar />
    <router-view></router-view>
  </div>
</template>

<script setup>
import nav_bar from './components/nav-bar.vue'

</script>

<style>

span, input::placeholder, input[type='date'] {
  font-family: "Oswald", sans-serif;
}

html, #app, .home {
    height: 100%;
}
body {
    background-image: url("assets/background.jpg") ;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
}

.home {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}
</style>
