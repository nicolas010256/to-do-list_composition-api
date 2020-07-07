<template>
  <v-card class="todo-card">
    <v-card-title>
      <h3>{{ props.todo.title }}</h3>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            class="ml-auto"
            icon
            @click="() => removeTodo(props.todo.id)"
            v-on="on"
          >
            <v-icon>
              mdi-close
            </v-icon>
          </v-btn>
        </template>
        <span>Remove</span>
      </v-tooltip>
    </v-card-title>
    <v-card-text>
      <p>{{ props.todo.description }}</p>
      <v-checkbox
        :input-value="props.todo.isDone"
        label="completed"
        @click.stop="() => toggleTodo(props.todo.id)"
      />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useActions } from 'vuex-composition-helpers';
import { ActionContext } from 'vuex';

import { Todo } from '../types';

type Actions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  removeTodo: (ctx: ActionContext<any, any>, id: string) => Promise<void>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toggleTodo: (ctx: ActionContext<any, any>, id: string) => Promise<void>;
}

export type TodoCardProps = {
  todo: Todo;
}

export default defineComponent({
  props: {
    todo: {
      type: Object,
      default: {} as Todo,
      required: true,
    },
  },
  setup: (props: TodoCardProps) => {
    const {
      removeTodo,
      toggleTodo,
    } = useActions<Actions>(['removeTodo', 'toggleTodo']);

    return {
      props,
      removeTodo,
      toggleTodo,
    };
  },
});
</script>
