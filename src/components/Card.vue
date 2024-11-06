<script >
export default {
  props: {
    card: Object,
  },
  methods: {
    showCard() {
      this.$router.push({ 
        name: 'swagger', 
        params: { 
          id: this.card.id, 
          name: this.card.name,
          description: this.card.description
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
      <h2>{{ card.name }}</h2>
      <p>{{ card.description }}</p>
      <p>Price: {{ card.price }}</p>
      <p>Likes: {{ card.likes }}</p>
      <button @click="showCard">mostra card</button>
    </ul>
  </div>
</template>
