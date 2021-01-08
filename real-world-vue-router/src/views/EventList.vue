<template>
  <div>
    <h1>Event Listing</h1>
    <!-- os cards são renderizados dinamicamente com v-for -->
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
import EventService from '../services/eventServices';
// para fazer requisicao http é legal que seja criada uma camada de serviço e o serviço importado
export default {
  components: {
    EventCard,
  },
  data() {
    return {
      events: [],
    };
  },
  created() {
    // a requisicao é feita pelo lificycle created
    EventService.getEvents()
      .then(({ data }) => { this.events = data; })
      // o retorno da api é jogado dentro de uma variável criada em data()
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="scss" scoped>
</style>
