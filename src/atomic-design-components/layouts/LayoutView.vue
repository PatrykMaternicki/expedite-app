<template>
  <v-app
    class="layoutsLayoutView"
  >
    <molecules-navigation-appbar 
      :title="title"
      :bold-text="boldText"
      :card-text="cardText"
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
  name: 'layoutsLayoutView',

  components: {
    moleculesNavigationAppbar
  },

  props: {
    title: {
      type: String,
      default: undefined
    },

    boldText: {
      type: String,
      default: undefined
    },

    cardText: {
      type: String,
      default: undefined
    }
  }
}
</script>
<style lang="scss">
  $class-name: 'layoutsLayoutView';

  .#{$class-name} {
    background-color: #f8f8f8 !important;
  }
</style>