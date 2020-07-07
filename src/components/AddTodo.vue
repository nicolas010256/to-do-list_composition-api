<template>
  <div class="add-todo">
    <v-form ref="form" @submit.prevent="submit">
      <v-text-field
        v-model="title"
        label="title"
        :rules="rules.title"
        filled
        rounded
        required
      />
      <v-textarea
        v-model="description"
        label="description"
        filled
        rounded
      />
      <div class="d-flex justify-end">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn type="submit" color="primary" fab v-on="on">
              <v-icon>
                mdi-plus
              </v-icon>
            </v-btn>
          </template>
          <span>Add</span>
        </v-tooltip>
      </div>
    </v-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { useActions } from 'vuex-composition-helpers';
import { ActionContext } from 'vuex';
import { v4 as uuidv4 } from 'uuid';
import { Todo, Form } from '../types';

type Actions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  addTodo: (ctx: ActionContext<any, any>, todo: Todo) => Promise<void>;
}

export default defineComponent({
  setup: () => {
    const title = ref('');
    const description = ref('');

    const form = ref<Form>();
    const { addTodo } = useActions<Actions>(['addTodo']);

    const rules = {
      title: [
        (v: string) => !!v || 'Fill the title',
      ],
    };

    const submit = () => {
      if (!form.value) return;

      const isValid = form.value.validate();
      if (isValid) {
        const todo: Todo = {
          id: uuidv4(),
          title: title.value,
          description: description.value,
          isDone: false,
        };

        addTodo(todo);

        title.value = '';
        description.value = '';

        form.value.resetValidation();
      }
    };
    return {
      submit,
      form,
      title,
      description,
      rules,
    };
  },
});
</script>
