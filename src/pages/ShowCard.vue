<!-- qui verra mostrato la card fulll -->
<script>
import axios from 'axios';

export default {
  data() {
    return {
      slug: this.$route.params.slug,
      card: {},
    };
  },
  mounted() {
    this.fetchCard();
  },
  methods: {
    fetchCard() {
      axios.get(`http://192.168.1.101:9000/api/users/${this.slug}`).then((response) => {
        this.card = response.data.product;
        console.log(this.card);
      });
    },
  },
};
</script>

<template>
  <div>
    <h1>ShowCard</h1>
    <div> slug: {{ slug }}</div>
    <div> name: {{ card.name }}</div>
    <div> description: {{ card.description }}</div>
    <div> price: {{ card.price }}</div>
    <div> likes: {{ card.likes }}</div>
  </div>
</template>
