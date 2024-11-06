<script >
export default {
  props: {
    card: Object,
    page: Number,
  },
  methods: {
    showCard() {
      this.$router.push({ 
        name: 'swagger', 
        params: { 
          id: this.card.id, 
          page: this.card.page,
        } 
      });
    },
  },
};
</script>

<template>
  <div>
    <h1>Card</h1>
    <ul>
      <img :src="card.cover_image" alt="Product Image" />
      <div> page: {{page}}</div>
      <h2>{{ card.name }}</h2>
      <p>{{ card.description }}</p>
      <p>Price: {{ card.price }}</p>
      <p>Likes: {{ card.likes }}</p>
      <button @click="showCard">mostra card</button>
    </ul>
  </div>
</template>
