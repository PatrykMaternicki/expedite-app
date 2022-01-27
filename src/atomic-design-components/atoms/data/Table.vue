<template>
  <div class="atomsDataTable">
    <v-data-table
      class="elevation-1"
      :headers="headers"
      :items="items"
      :items-per-page="5"
      :width="2400"
    />
  </div>
</template>
<script>
export default {
  name: 'AtomsDataTable',

  props: {
    items: {
      type: Array,
      default: () => [],
    },

    headers: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss">
  $class-name: 'atomsDataTable';

  .#{$class-name} {
    th {
      border-bottom-color: #c3eb5b !important;
      border-bottom-width: 4px !important;
    }

    @media all and (min-width: 1024px) {
      table {
        min-width: 100%;
        width: 1600px !important
      }
    }

    tr td:first-child {
      position: sticky;
      left: 0;
      background-color: #fff;
    }

    table th:first-child {
      position: sticky;
      left: 0;
      background-color: #fff;
    }

    tbody tr:last-child td:first-child {
      background-color: #f8f8f8;
    }

    table tbody tr:last-child {
      background-color: #f8f8f8;
    }
  }
</style>
