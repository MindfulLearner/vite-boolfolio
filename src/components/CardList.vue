<!-- cardlist presi da axios a carimcamento iniziale  -->
<script >
import Card from './Card.vue';
import axios from 'axios';

export default {
  data() {
    return {
      cards: [],
      pagination: [],
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
        this.pagination = response.data.products.pagination;
        console.log(this.cards);
      });
    },
    goToPage(page) {
      this.fetchCards(page);
    },
  },
};
</script>


<template>
  <div>
    <h1>CardList</h1>
    <div v-for="card in cards" :key="card.id">
      <Card :card="card" :pagination="pagination" />
    </div>
    <div>
      <button @click="goToPage(pagination.current_page - 1)">Previous</button>
      <button @click="goToPage(pagination.current_page + 1)">Next</button>
    </div>
  </div>
</template>


