import Vue from 'vue';
import Vuex from 'vuex';
import EventServices from '../services/eventServices';

Vue.use(Vuex);

export default new Vuex.Store({
  //  definicao do estado iniical
  state: {
    user: { id: 'abc123', name: 'Fabiano' },
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food'],
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false },
    ],
    events: [
      { id: 1, text: '...', organizer: '...' },
      { id: 2, text: '...', organizer: '...' },
      { id: 3, text: '...', organizer: '...' },
      { id: 4, text: '...', organizer: '...' },
    ],
  },
  mutations: {
    // a mutation é uma funçao que recebe sempre o state e pode receber um payload
    ADD_EVENT(state, event) {
      // a mutation atualiza o estado
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
  },
  // a action é uma função que recebe dois parametros, {commit} e o payload
  actions: {
    createEvent({ commit }, event) {
      // commit é que despacha a mutations correspondente, esse nome será usado no componente
      // a action pode retornar uma promise
      return EventServices.postEvent(event).then(() => commit('ADD_EVENT', event));
    },
    fetchEvents({ commit }) {
      EventServices.getEvents()
        .then(({ data }) => { commit('SET_EVENTS', data); })
        .catch((err) => console.log(err));
    },
  },
  modules: {
  },
  // o getter permite acessar uma propriedade calculada em qualquer componente do app
  getters: {
    // passar o estado como parametro de uma funcao que retorna um valor
    catLength: (state) => state.categories.length,
    doneTodos: (state) => state.todos.filter((todo) => todo.done),
    // é possivel chamar um getter dentro de outro getter
    activeTodosCount: (state, getters) => state.todos.length - getters.doneTodos.length,
    // o getter também pode ser uma função
    getEventById: (state) => (id) => state.events.find((event) => event.id === id),
  },
});
