export const dateToString = (time: string): string => {
  const date = new Date(time);

  return (
    date.getDate() +
    'th ' +
    date.toLocaleString('en-US', {
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
  );
};
