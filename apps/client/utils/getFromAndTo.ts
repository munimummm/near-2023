export const getFromAndTo = (currentPage, itemsPerPage) => {
  let from = (currentPage - 1) * itemsPerPage;
  let to = currentPage * itemsPerPage - 1;
  return { from, to };
};
