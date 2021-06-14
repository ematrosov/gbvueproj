<template>
  <div>
    <h1>404 page not found</h1>
    <div>
      maybe you need a route to
      <router-link to="/finance" :active="$route.name === 'finance'"
        >index</router-link
      >?
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  methods: {},
};
</script>

<style module>
</style>