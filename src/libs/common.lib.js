export function toNormalize(list = []) {
  return list.reduce(
    (rs, item) => {
      rs.ids = [...rs.ids, item.id];
      rs.results = { ...rs.results, [item.id]: item };
      return rs;
    },
    { ids: [], results: {} }
  );
}
