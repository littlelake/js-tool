/**
 * @description 创建一个新数组并包含原数组中所有的非假值元素。例如 false、null、 0、""、undefined 和 NaN 都是“假值”。
 * @param {array} array - 数组 
 * @example 
 * compact([0, 1, false, 2, '', 3])
 * // => [1, 2, 3]
 */
function compact(array) {
  // 判断数组是否有效
  const length = array == null ? 0 : array.length;
  let resIndex = 0;
  let result = [];

  if (!length) return result;

  for (let value of array) {
    // 取出那些boolean不为true的值
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

export default compact;