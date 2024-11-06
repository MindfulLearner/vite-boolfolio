<!-- qui verra mostrato la card fulll -->
<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<template>
  <div>
    id: {{ $route.params.id }}
    name: {{ $route.params.name }}
    description: {{ $route.params.description }}
  </div>
</template>
