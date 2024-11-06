<!-- qui verra mostrato la card fulll -->
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      page: this.$route.params.page,
    };
  },
};
</script>

<template>
  <div>
    id: {{ id }}
    page: {{ page }}
  </div>
</template>
