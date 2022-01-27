<template>
  <div class="atomsFormsDropdown">
    <v-select
      dense
      filled
      :items="items.map(item => item.label)"
      label="View"
      @change="handleChange"
    />
  </div>
</template>
<script>
export default {
  name: 'AtomsFormsDropdown',

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    handleChange(val) {
      this.$emit('change', this.items.find((item) => item.label === val));
    },
  },
};
</script>
<style lang="scss">
  $class-name: 'atomsFormsDropdown';

  .#{$class-name} {
    .v-text-field__details {
      display: none;
    }
  }
</style>
