<template>
  <div>
    <transition-group name="list" tag="div">
      <todo-card v-for="todo in todos" :key="todo.id" :todo="todo" />
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useState } from 'vuex-composition-helpers';

// Components
import TodoCard from './TodoCard.vue';

import { Todo } from '../types';

type State = {
  todos: Todo[];
}

export default defineComponent({
  components: {
    TodoCard,
  },
  setup: () => {
    const { todos } = useState<State>(['todos']);

    return {
      todos,
    };
  },
});
</script>

<style scoped>
  .todo-card:not(:first-child) {
    margin-top: 12px;
  }

  /* Transition */
  .list-enter-active, .list-leave-active {
    transition: all 400ms;
  }

  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateX(-30px);
  }

  .list-move {
    transition: transform 1s;
  }
</style>
