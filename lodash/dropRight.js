import slice from './slice';

/**
 * @description 将 array 尾部的 n 个元素去除，并返回剩余的部分
 * @param {*} array - 数组
 * @param {*} n - 去掉的元素个数
 * @example
 * dropRight([1, 2, 3])
 * // => [1, 2]
 *
 * dropRight([1, 2, 3], 2)
 * // => [1]
 *
 * dropRight([1, 2, 3], 5)
 * // => []
 *
 * dropRight([1, 2, 3], 0)
 * // => [1, 2, 3]
 */
function dropRight(array, n = 1) {
  const length = array == null ? 0 : array.length;
  // slice中当end为负值时，那么end += length;
  // 所以n < 0 ? 0 : -n相当于n += length
  return length ? slice(array, 0, n < 0 ? 0 : -n) : [];
}

export default dropRight;