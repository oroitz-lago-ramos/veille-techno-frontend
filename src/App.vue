<script lang="ts" setup>
import { ref } from 'vue';

const message = ref("Super Kanban");
</script>


<template>
  <main>
    <h1>{{ message }}</h1>
    <form>
      <label>
        
      </label>
    </form>
  </main>
</template>

<style scoped>
main {
  max-width: 80%;
  margin: 1rem auto;
}
h1 {
  text-align: center;
}
</style>
