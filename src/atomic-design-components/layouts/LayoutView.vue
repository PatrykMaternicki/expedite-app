<template>
  <v-app
    class="layoutsLayoutView"
  >
    <molecules-navigation-appbar
      :bold-text="boldText"
      :card-text="cardText"
      :title="title"
    />
    <v-main
      class="pa-0"
    >
      <slot />
    </v-main>
  </v-app>
</template>
<script>
import moleculesNavigationAppbar from '@/atomic-design-components/molecules/navigation/Appbar';

export default {
  name: 'LayoutsLayoutView',

  components: {
    moleculesNavigationAppbar,
  },

  props: {
    title: {
      type: String,
      default: undefined,
    },

    boldText: {
      type: String,
      default: undefined,
    },

    cardText: {
      type: String,
      default: undefined,
    },
  },
};
</script>
<style lang="scss">
  $class-name: 'layoutsLayoutView';

  .#{$class-name} {
    background-color: #f8f8f8 !important;
  }
</style>
