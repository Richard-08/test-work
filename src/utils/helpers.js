export const chunk = (arr, size) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (item, idx) => {
    return arr.slice(idx * size, idx * size + size);
  });
};
