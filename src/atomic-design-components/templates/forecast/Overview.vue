<template>
<div>
    <layouts-layout-view
      title="Forecasting"
      bold-text="Opportunity Name"
      card-text="Forecast Name"
    >
      <organisms-forecast-table 
        :data="data"
      />
    </layouts-layout-view>
  </div> 
</template>
<script>
import layoutsLayoutView from '@/atomic-design-components/layouts/LayoutView';
import organismsForecastTable from '@/atomic-design-components/organisms/forecast/Table';
import fakeData from '@/assets/fake-data';
export default {
  name: 'templatesForecastOverview',
  components: {
    layoutsLayoutView,
    organismsForecastTable
  },

  data() {
    return {
      data: fakeData
    }
  }
}
</script>
