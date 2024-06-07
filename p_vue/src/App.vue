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
    html, #app, .home {
        height: 100%;
    }
    body {
        padding: 0;
        margin: 0;
        height: 100%;
        background-color: #E0FBE2;
    }
</style>
