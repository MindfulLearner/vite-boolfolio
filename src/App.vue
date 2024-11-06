<script>
import AppHeader from './components/AppHeader.vue';
import NavBar from './components/NavBar.vue';

export default {
  components: {
    AppHeader,
    NavBar,
  },
};
</script>

<template>
  <NavBar />
  <router-view />
</template>

