<template>
<div>
  <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
      <label>Select a category</label>
      <select v-model="event.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>

      <h3>Name describe your event</h3>
      <div class="field">
        <label>Title</label>
        <input v-model="event.title" type="text" placeholder="Add an event title"/>
      </div>

      <div class="field">
        <label>Description</label>
        <input v-model="event.description" type="text" placeholder="Add a description"/>
      </div>

      <h3>Where is your event?</h3>
      <div class="field">
        <label>Location</label>
        <input v-model="event.location" type="text" placeholder="Add a location"/>
      </div>

      <h3>When is your event?</h3>

      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date"/>
      </div>

      <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>

      <input type="submit" class="button -fill-gradient" value="Submit"/>
    </form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
  components: {
    Datepicker,
  },
  data() {
    // o data além de retornar pode ter lógica embutida
    const times = [];
    for (let i = 1; i <= 24; i += 1) {
      times.push(`${i}:00`);
    }
    return {
      times,
      // a categoria é obtida pela store
      categories: this.$store.state.categories,
      // esse evento é o que será mostrado no fomulário, o método mantém o formulário vazio
      event: this.createFreshEventObject(),
    };
  },
  methods: {
    createEvent() {
      // quando o formulário for enviado esse método createEvent é acionado para que as infos sejam
      // enviadas para a store. Para tanto eu preciso invocar a action
      // this.$store.dispatch, é passado o nome da action entre aspas e o payload
      this.$store
        .dispatch('createEvent', this.event)
        // como a action é uma promisse o dispatch também retorna uma promisse
        .then(() => {
          // usar o this.$router.push permite que ao finalizar seja redirecionado para a rota do
          // novo evento. Daí passa como se fosse um router-link
          this.$router.push({
            name: 'event-show',
            params: { id: this.event.id },
          });
          // ao executar esse comando se limpa o formulário
          this.event = this.createFreshEventObject();
        })
        .catch(() => {
          console.log('There was a problem creating your event');
        });
    },
    createFreshEventObject() {
      // o user é obtido pela store
      const { user } = this.$store.state;
      // o id do evento é calculado por uma funcao de random
      const id = Math.floor(Math.random() * 10000000);
      // o método entao retorna um objeto
      return {
        id,
        user,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: [],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.field {
  margin-bottom: 24px;
}
</style>
