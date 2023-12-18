export const dateFormatting = (dateString: string) => {
  const date = new Date(dateString);
  const formatDate = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'UTC',
  })
    .format(date)
    .replace(/.\s*$/, '');
  return formatDate;
};
