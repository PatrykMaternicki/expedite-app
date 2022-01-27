<template>
  <div class="atomsFormsDropdown">
    <v-select
      @change="handleChange"
      :items="items.map(item => item.label)"
      filled
      label="View"
      dense
    />
  </div>
</template>
<script>
export default {
  name: 'atomsFormsDropdown',
  
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    handleChange(val) {
      this.$emit('change', this.items.find(item => item.label === val))
    }
  }
}
</script>
<style lang="scss">
  $class-name: 'atomsFormsDropdown';

  .#{$class-name} {
    .v-text-field__details {
      display: none;
    }
  }
</style>