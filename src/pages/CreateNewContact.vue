<script>
import axios from 'axios';
export default {
  name: "CreateNewContact",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    createContact() {
      axios.post('http://192.168.1.101:9000/api/create_contact', {
        name: this.name,
        email: this.email,
        phone: this.phone,
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>

<template>
  <div>CreateNewContact</div>
  <form @submit.prevent="createContact">
    <input type="text" v-model="name" placeholder="Name" />
    <input type="text" v-model="email" placeholder="Email" />
    <input type="text" v-model="phone" placeholder="Phone" />
    <button type="submit" >Create</button>
  </form>
</template>
