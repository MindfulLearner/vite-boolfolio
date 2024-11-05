<script >
export default {
  props: {
    card: Object,
    pagination: Object,
  },
};
</script>

<template>
  <div>
    <h1>Card</h1>
    <ul>
      <li v-for="pagination in pagination" :key="pagination.id">
        <img :src="pagination.cover_image" alt="Product Image" />
        <h2>{{ pagination.name }}</h2>
        <p>{{ pagination.description }}</p>
        <p>Price: {{ pagination.price }}</p>
        <p>Likes: {{ pagination.likes }}</p>
      </li>
    </ul>
  </div>
</template>
