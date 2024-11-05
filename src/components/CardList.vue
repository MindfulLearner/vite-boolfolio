<!-- cardlist presi da axios a carimcamento iniziale  -->
<script >
import Card from './Card.vue';
import axios from 'axios';

export default {
  data() {
    return {
      cards: [],
    };
  },
  components: {
    Card,
  },
  mounted() {
    this.fetchCards();
  },
  methods: {
    fetchCards(page = 1) {
      axios.get(`http://192.168.1.101:9000/api/users?page=${page}`).then((response) => {
        this.cards = response.data.products.data;
        console.log(this.cards);
      });
    },
    plusPage() {
      this.fetchCards(this.pagination.current_page + 1);
    },
    minusPage() {
      this.fetchCards(this.pagination.current_page - 1);
    },
  },
};
</script>


<template>
  <div>
    <h1>CardList</h1>
    <div v-for="card in cards" :key="card.id">
      <Card :card="card" />
    </div>
    <div>
      <button @click="minusPage">Previous</button>
      <button @click="plusPage">Next</button>
    </div>
  </div>
</template>


