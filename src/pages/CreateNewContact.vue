<script>
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
    console.log(this.name, this.email, this.phone);
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
    <button type="submit" @click="createContact">Create</button>
  </form>
</template>
