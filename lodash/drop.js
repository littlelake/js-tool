import slice from './slice';

/**
 * @description 将 array 中的前 n 个元素去掉，然后返回剩余的部分。
 * @param {*} array - 数组 
 * @param {*} n - 去掉的元素个数
 * @example
 * drop([1, 2, 3])
 * // => [2, 3]
 *
 * drop([1, 2, 3], 2)
 * // => [3]
 *
 * drop([1, 2, 3], 5)
 * // => []
 *
 * drop([1, 2, 3], 0)
 * // => [1, 2, 3]
 */
function drop(array, n = 1) {
  const length = array == null ? 0 : array.length;
  return length ? slice(array, n < 0 ? 0 : n, length) : [];
}

export default drop;