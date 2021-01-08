import Vue from 'vue';
import VueRouter from 'vue-router';
import EventList from '../views/EventList.vue';
import EventShow from '../views/EventShow.vue';
import EventCreate from '../views/EventCreate.vue';

Vue.use(VueRouter);

const routes = [
  // no router-dom as rotas sao passadas no browser router, aqui as rotas sao passadas como objeto
  // e possuem o caminho, o nome da rota e o componente a ser renderizado
  {
    path: '/',
    name: 'event-list',
    component: EventList,
  },
  {
    path: '/event-show/:id',
    // para passar um id de rota basta colocar /:id ao final
    name: 'event-show',
    component: EventShow,
    // props true permite passar o id como prop para o componente que ira renderizar
    props: true,
  },
  {
    path: '/event-create',
    name: 'event-create',
    component: EventCreate,
  },

  // como fazer redirecionamento de rota
  {
    path: '/about',
    // caso esse seja o path digitado irá redirecionar para o componente nome About
    redirect: { name: 'event-create' },
  },
  // Outro jeito de fazer redirecionamento é com Alias
  {
    path: '/about-us',
    name: 'About',
    // outra forma de passar um componente
    component: () => import('../views/EventCreate.vue'),
    alias: '/about',
  },

];

const router = new VueRouter({
  routes,
});

export default router;
