export const getHighestId = (array) =>{
  const ids = array.map(item => item.id);
  const maxId = ids.lenth === 0 ? 0 : Math.max(...ids);
  return maxId;
}
