<template>
  <v-btn
    class="atomsButtonsIcon"
    color="#0a0a0a"
  >
    <v-icon
      large
      color="#acacac"
    >
      mdi-{{icon}}
    </v-icon>
  </v-btn>
</template>
<script>
export default {
  name: 'atomsButtonsIcon',

  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
  .atomsButtonsIcon {
    height: 100% !important;
    padding: 0 !important;
    box-shadow: inherit !important;
    border-radius: inherit !important;
    border-color: #acacac !important;
    border-right: 1px solid;
  }
</style>