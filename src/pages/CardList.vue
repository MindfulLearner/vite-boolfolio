<!-- cardlist presi da axios a carimcamento iniziale  -->
<script >
import Card from '../components/Card.vue';
import axios from 'axios';

export default {
  data() {
    return {
      cards: [],
      count: 1,
    };
  },
  components: {
    Card,
  },
  mounted() {
    this.fetchCards();
  },
  methods: {
    fetchCards(page) {
      axios.get(`http://192.168.1.101:9000/api/users?page=${page}`).then((response) => {
        this.cards = response.data.products.data;
        console.log(this.cards);
      });
    },
    plusPage() {
      if (this.count < 4) {
        this.count = this.count + 1;
        this.fetchCards(this.count);
        console.log(this.count);
      } else {
        console.log('max page');
        console.log(this.count);
     
      }
    },
    minusPage() {
      if (this.count > 1) {
        this.count = this.count - 1;
        this.fetchCards(this.count);
        console.log(this.count);
      } else {
        console.log('min page');
        console.log(this.count);
      }
    },
  },
};
</script>


<template>
  <div>
    <div>
      <button @click="minusPage">Previous</button>
      <button @click="plusPage">Next</button>
    </div>
    <h1>CardList</h1>
    <div v-for="card in cards" :key="card.id">
      <Card :card="card" :page="count" />
    </div>
  </div>
</template>


