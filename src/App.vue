<template>
  <v-app>
    <v-main class="main">
      <h1 class="my-8">To Do List</h1>
      <add-todo />
      <todo-list class="mt-8" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

// Components
import TodoList from './components/TodoList.vue';
import AddTodo from './components/AddTodo.vue';

export default defineComponent({
  components: {
    TodoList,
    AddTodo,
  },
});
</script>

<style scoped>
  .main {
    width: min(max(600px, 40%), 90%);
    margin: 0 auto;
  }
</style>
