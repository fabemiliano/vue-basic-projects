<template>
  <div>
    <h1>Create an evenet, {{ user.name }}</h1>
    <p>this event was created by {{ user.name }}</p>
    <p>There are {{ catLength }} categories</p>
    <!-- <p>{{getEvent(1)}}</p> -->
    <p>{{getEventById(1)}}</p>
    <ul>
      <li v-for="category in categories" :key="category">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    // um getter pode ser obtido pelo computed com o this.$store
    // getEvent() {
    //   return this.$store.getters.getEventById;
    // },
    // catLength() {
    //   return this.$store.getters.catLength;
    // },
    // o jeito mais fácil de obter getter e state é com os maps
    ...mapGetters(['getEventById', 'catLength']),
    ...mapState(['user', 'categories']),
  },
  // computed: mapState({
  // o jeito comum de pegar um estado da store é parecido com o redux
  // userName: (state) => state.user.name,
  // uerId: (state) => state.user.id,
  // outra forma de fazer é passando só uma string com o nome do estado (se nao tiver propriedade)
  // categories: 'categories',
  // categories: (state) => state.categories,
  // }),

  // da pra pegar o state sem mapstate também
  // computed: {
  //   userName() {
  //     return this.$store.state.user.name;
  //   },
  // },

  // para usar o computed com mapstate é bom usar o spread operator para ter outras propriedades
  // alem disso caso opte por usar string da pra fazer o mapstate com array
  /*   computed: {
    catLength() {
      return this.$store.getters.catLength
    },
    ...mapState(['user', 'categories'])
    } */
};
</script>

<style lang="scss" scoped>
</style>
