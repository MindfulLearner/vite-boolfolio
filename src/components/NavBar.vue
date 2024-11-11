<script>
export default {
  name: 'NavBar',
};
</script>

<template>
  <nav>
    <router-link :to="{ path: '/' }" class="clickable">Home</router-link>
    <router-link :to="{ path: '/cardlist' }" class="clickable">CardList</router-link>
    <router-link :to="{ path: '/create-new-contact' }" class="clickable">CreateNewContact</router-link>
  </nav>
</template>
