<script >
export default {
  props: {
    card: Object,
  },
};
</script>

<template>
  <div>
    <h1>Card</h1>
    <ul>
      <img :src="card.cover_image" alt="Product Image" />
      <h2>{{ card.name }}</h2>
      <p>{{ card.description }}</p>
      <p>Price: {{ card.price }}</p>
      <p>Likes: {{ card.likes }}</p>
    </ul>
  </div>
</template>
