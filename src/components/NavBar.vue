<script>
export default {
  name: 'NavBar',
};
</script>

<template>
  <nav>
    <router-link :to="{ path: '/' }" class="clickable">Home</router-link>
    <router-link :to="{ path: '/cardlist' }" class="clickable">CardList</router-link>
  </nav>
</template>
