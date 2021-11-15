const DatePicker = ({ date }: { date: string }) => {
  const Full = new Date(date);

  const day = Full.getDate();

  const month = Full.getMonth() + 1;

  const fullYear = Full.getFullYear();

  const result = `${day}/${month}/${fullYear}`;

  return <small role="dialog">{result ? result : ""}</small>;
};

export default DatePicker;
