import slice from './slice';

/**
 * @description 将 array 拆分成多个 size 长度的块，把这些块组成一个新数组。 如果 array 无法被分割成全部等长的块，那么最后剩余的元素将组成一个块
 * @param {array} array - 数组
 * @param {number} size - 每个块的长度
 * @example
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */

function chunk(array, size) {
  size = Math.max(size, 0); // 如果size比0小，那么size为0
  const len = array == null ? 0 : array.length;
  // 如果len为0或是小于0，那么返回一个空数组
  if (!len || len < 0) return [];
  let index = 0;
  let resIndex = 0;
  // 定义最后数组的长度
  const result = new Array(Math.ceil(len / size));

  // 利用了slice截取的功能slice(array, start, end)
  while (index < len) {
    result[resIndex++] = slice(array, index, (index += size));
  }
  return result;
}

export default chunk;

