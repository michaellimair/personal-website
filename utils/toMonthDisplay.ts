const toMonthDisplay = (date: Date): string => new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
}).format(date);

export default toMonthDisplay;
