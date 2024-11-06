<script>
import AppHeader from './pages/AppHeader.vue';
</script>

<template>
 <router-link :to="{ path: '/' }" class="clickable">Home</router-link>
  <router-link :to="{ path: '/cardlist' }" class="clickable">CardList</router-link>

  <AppHeader />
 
  <router-view />
</template>

