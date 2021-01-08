<template>
  <div class="icon">
    <!-- o tamanho do icon pode ser passado via prop -->
    <svg class="icon" :width="width" :height="height">
      <!-- a leitura do arquivo svg é feita conforme abaixo. Como há varios icones se passar o
      nome de um icone do modo abaixo irá mostrar o icone passado -->
      <use v-bind="{ 'xlink:href': 'feather-sprite.svg#' + name }"></use>
    </svg>
    <!-- o slot é uma forma de alterar o conteúdo de um componente conforme for desejado
    o slot possui um valor padrão que pode ser alterado ao chamar o componente -->
    <slot>Default</slot>
    <!-- para saber qual slot pertence a qual componente é importante nomear o slot -->
    <!-- <slot name="default">Default</slot> -->
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 1rem;
  font-weight: 600;
}
.icon {
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  margin-right: 6px;
}
</style>
