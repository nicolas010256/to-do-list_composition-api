import Vue from 'vue';
import Vuex from 'vuex';
import { Todo } from '@/types';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './types';

Vue.use(Vuex);

export type TodoState = {
  todos: Todo[];
}

export default new Vuex.Store<TodoState>({
  state: () => ({
    todos: []
  }),
  mutations: {
    [ADD_TODO]: (state, todo: Todo) => {
      state.todos.push(todo);
    },
    [REMOVE_TODO]: (state, id: string) => {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
    [TOGGLE_TODO]: (state, id: string) => {
      const todo = state.todos.find(todo => todo.id === id)
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    }
  },
  actions: {
    addTodo: ({ commit }, todo: Todo) => {
      commit(ADD_TODO, todo);
    },
    removeTodo: ({ commit }, id: string) => {
      commit(REMOVE_TODO, id);
    },
    toggleTodo: ({ commit }, id: string) => {
      commit(TOGGLE_TODO, id);
    }
  },
});
