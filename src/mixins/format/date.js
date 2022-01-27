export const MixinsFormatDate = {
  methods: {
    formatMonth(number) {
      const date = new Date();
      date.setMonth(number);
      const options = {
        month: 'short',
      };
      return date.toLocaleDateString('en-US', options);
    },

    getMonthForDate(inDate) {
      const date = new Date(inDate);
      const options = {
        month: 'short',
      };

      return date.toLocaleDateString('en-US', options);
    },
  },
};
