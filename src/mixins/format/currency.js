export const MixinsFormatCurrency = {
  methods: {
    formatCurrency(value) {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

      return formatter.format(value)
    }
  }
}