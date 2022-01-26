<template>
<div>
    <layouts-layout-view
      title="Forecasting"
      bold-text="Opportunity Name"
      card-text="Forecast Name"
    >
    </layouts-layout-view>
  </div> 
</template>
<script>
import layoutsLayoutView from '@/atomic-design-components/layouts/LayoutView';
export default {
    name: 'templatesForecastOverview',
    components: {
        layoutsLayoutView
    }
}
</script>