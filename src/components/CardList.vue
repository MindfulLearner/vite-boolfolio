<!-- cardlist presi da axios a carimcamento iniziale  -->
<script >
import Card from './Card.vue';
import axios from 'axios';

export default {
  data() {
    return {
      cards: [],
      products: [],
    };
  },
  components: {
    Card,
  },
  mounted() {
    this.fetchCards();
  },
  methods: {
    fetchCards() {
      axios.get('http://192.168.1.101:9000/api/users').then((response) => {
        this.cards = response.data;
        this.products = response.data.products;
      });
    },
  },
};
</script>


<template>
  <div>
    <h1>CardList</h1>
    <div v-for="card in cards" :key="card.id">
      <Card :card="card" :products="products" />
    </div>
  </div>
</template>


