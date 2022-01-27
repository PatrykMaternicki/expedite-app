<template>
  <img
    :src="source"
  >
</template>
<script>
export default {
  name: 'AtomsLogo',

  data() {
    return {
      source: require('@/assets/expedite_ico_web.svg'),
    };
  },
};
</script>
<style scoped>
  .atomsButtonsIcon {
    height: 100% !important;
    padding: 0 !important;
    box-shadow: inherit !important;
    border-radius: inherit !important;
    border-color: #414141 !important;
    border-right: 1px solid;
  }
</style>
