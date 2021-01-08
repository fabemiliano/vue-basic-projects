<template>
  <div>
    <h1>Event Listing</h1>
    <!-- os cards são renderizados dinamicamente com v-for -->
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
import { mapState } from 'vuex';
// para fazer requisicao http é legal que seja criada uma camada de serviço e o serviço importado
export default {
  components: {
    EventCard,
  },
  data() {
    return {
    };
  },
  /*
  Esse código aqui faz o mesmo que o de baixo só que de um jeito diferente
  created() {
    // a requisicao é feita pelo lificycle created
    EventService.getEvents()
      .then(({ data }) => { this.events = data; })
      // o retorno da api é jogado dentro de uma variável criada em data()
      .catch((err) => console.log(err));
  }, */
  created() {
    this.$store.dispatch('fetchEvents');
  },
  // ainda nao entendi pq o mapstate é feito dentro do computed
  computed: mapState(['events']),
};
</script>

<style lang="scss" scoped>
</style>
