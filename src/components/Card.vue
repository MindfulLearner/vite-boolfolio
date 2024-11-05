<script >
export default {
  props: {
    products: Array,
  },
};
</script>

<template>
  <div>
    <h1>Card</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <img :src="product.cover_image" alt="Product Image" />
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>Price: {{ product.price }}</p>
        <p>Likes: {{ product.likes }}</p>
      </li>
    </ul>
  </div>
</template>
