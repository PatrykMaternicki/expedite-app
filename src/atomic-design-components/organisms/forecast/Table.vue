<template>
  <div class="organismsForecastTable">
    <div class="organismsForecastTable__top">
      <div class="organismsForecastTable__dropdownWrapper">
        <atoms-forms-dropdown
          :items="[
            {
              label: 'Show full attributes',
              id: 0
            },
            {
              label: 'Show monthly summary',
              id: 1
            }
          ]"
          @change="handleChange"
        />
      </div>
    </div>
    <atoms-data-table
      :headers="[...headers, ...setYears, ...setMonth]"
      :items="[...prepareData, ...summaryData]"
    />
  </div>
</template>
<script>
import AtomsFormsDropdown from '@/atomic-design-components/atoms/forms/Dropdown';
import AtomsDataTable from '@/atomic-design-components/atoms/data/Table';
import DictionaryForecastTable from '@/dictionaries/forecast/table';
import { MixinsFormatCurrency } from '@/mixins/format/currency';
import { MixinsFormatDate } from '@/mixins/format/date';

export default {
  name: 'OrganismsForecastTable',

  mixins: [
    MixinsFormatCurrency,
    MixinsFormatDate,
  ],

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  components: {
    AtomsFormsDropdown,
    AtomsDataTable,
  },

  computed: {
    getMonthlyData() {
      return this.data.summaryMonths.responseData.linesData;
    },

    getYearsData() {
      return this.data.summaryYears.responseData.yearsData;
    },

    prepareData() {
      const prepareData = [];
      const monthlyLinesData = this.getMonthlyData;
      const yearsLinesData = this.getYearsData;
      const formatValue = (value) => Number.parseInt(value.split('$')[1]);

      this.data.lineItemData.forEach((item) => {
        const formatedObj = {
          productItemName: item.productItemName,
          attributes: item.attributes || 'N/A',
          revenueType: item.revenueType,
          displayQty: item.displayQty,
          displayUnitPrice: item.displayUnitPrice,
          startMonth: `${new Date(item.startMonth).getFullYear()} ${this.getMonthForDate(item.startMonth)}`,
          months: item.months,
          committed: item.committed,
          recordId: item.productFLIId,
        };

        if (this.showMonth) {
          const monthsData = monthlyLinesData.filter((monthData) => item.productFLIId === monthData.recordId);
          monthsData.forEach((monthData) => {
            const findMonthElement = this.data.lineItemData.find((item) => item.productFLIId === monthData.recordId);
            if (findMonthElement) {
              const key = `${this.createKeyYearWithMonth(monthData.startMonth, monthData.startYear)}`;
              const sum = monthData.data
                .map((value) => formatValue(value))
                .reduce((prev, currentValue) => prev + currentValue);
              formatedObj[key] = this.formatCurrency(sum);
            }

            const keys = Object.keys(formatedObj);
            this.generateMonthKeys.forEach((value) => {
              if (!keys.includes(value)) {
                formatedObj[value] = '-';
              }
            });
          });
        }

        if (this.showYear) {
          yearsLinesData.forEach((yearData) => {
            const findElement = yearData.lineData.find((item) => item.recordId === formatedObj.recordId);
            const key = this.createKeyYear(yearData.year);
            if (findElement) {
              formatedObj[`${key}`] = findElement.amount;
            } else {
              formatedObj[`${key}`] = '-';
            }
          });
        }

        prepareData.push(formatedObj);
      });

      return prepareData;
    },

    setYears() {
      if (this.showYear) {
        const yearsLinesData = this.getYearsData;
        return yearsLinesData.map((yearData) => ({
          text: yearData.year,
          value: `${this.createKeyYear(yearData.year)}`,
        }));
      }
      return [];
    },

    getUniqKeysMonth() {
      const monthlyLinesData = this.getMonthlyData;
      const keys = (monthlyLinesData.map((monthData) => `${monthData.startMonth}/${monthData.startYear}`));
      return Array.from(new Set(keys));
    },

    generateMonthKeys() {
      return this.getUniqKeysMonth.map((value) => {
        const splitedValue = value.split('/');
        return `${this.createKeyYearWithMonth(splitedValue[0], splitedValue[1])}`;
      });
    },

    groupByPeriod() {
      const monthlyLinesData = this.getMonthlyData;

      return monthlyLinesData.reduce((acc, value) => {
        const key = this.createKeyYearWithMonth(value.startMonth, value.startYear);
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(value);
        return acc;
      }, {});
    },

    setMonth() {
      if (this.showMonth) {
        return this.getUniqKeysMonth.map((key) => {
          const splitedValue = key.split('/');
          return {
            text: `${this.formatMonth(splitedValue[0])} ${splitedValue[1]}`,
            value: `${this.createKeyYearWithMonth(splitedValue[0], splitedValue[1])}`,
          };
        });
      }
      return [];
    },

    summaryData() {
      const yearsLinesData = this.getYearsData;
      const formatValue = (value) => Number.parseInt(value.split('$')[1]);
      const formatedObj = {};
      if (this.showYear) {
        yearsLinesData.forEach((yearData) => {
          formatedObj[`${this.createKeyYear(yearData.year)}`] = yearData.summaryAmount;
        });
        return formatedObj;
      }

      for (const prop in this.groupByPeriod) {
        const sum = this.groupByPeriod[prop]
          .map((value) => value.data
            .map((value) => formatValue(value))
            .reduce((acc, value) => acc + value)).reduce((acc, value) => acc + value);

        formatedObj[prop] = this.formatCurrency(sum);
      }

      return formatedObj;
    },
  },

  data() {
    return {
      headers: DictionaryForecastTable,
      showMonth: false,
      showYear: true,
    };
  },

  methods: {
    handleChange(val) {
      if (val.id === 1) {
        this.showMonth = true;
        this.showYear = false;
      } else {
        this.showYear = true;
        this.showMonth = false;
      }
    },

    createKeyYearWithMonth(month, year) {
      return `month__${month}__year__${year}`;
    },

    createKeyYear(year) {
      return `year__${year}`;
    },
  },
};
</script>
<style lang="scss">	$class-name: 'organismsForecastTable';

	.#{$class-name} {
		.#{$class-name}__top {
      padding: 30px;
      display: flex;
      justify-content: flex-end;
		}

		.#{$class-name}__dropdownWrapper {
			width: 200px;
		}
  }
</style>
