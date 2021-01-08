<template>
  <!-- o router-link é o mesmo que o Link do router-dom -->
  <!-- dentro do router link posso passar o caminho ou o nome da rota (com bind :to) -->
  <!-- É possível passar como props o id da rota com params: {id: id} -->
  <!-- so precisa lembrar de colocar props true na rota no arquivo route.js -->
  <router-link
    class="event-link"
    :to="{ name: 'event-show', params: { id: event.id } }"
  >
    <div class="event-card">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h4 class="title">{{ event.title }}</h4>
      <!-- para passar um slot com nome usa o identificador slot -->
      <!-- <BaseIcon slot="default" name="users" /> -->
      <!-- para passar a informação pro slot se passa como se fosse um children e esse
      children será lido pelo slot, se não passar nada o valor default é mostrado -->
      <BaseIcon name="users">{{ event.attendees.length }} attending</BaseIcon>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
