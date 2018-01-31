/**
 * @description 用于对数组进行截取
 * @param {array} array - 数组 
 * @param {number} start - 开始截取的位置 
 * @param {number} end - 最后截取的位置，不包含这个点 
 */
function slice(array, start, end) {
  let length = array == null ? 0 : array.length;
  if (!length) return [];

  start = start == null ? 0 : start;
  end = end === undefined ? length : end; // 如果end为空，则默认表示其值为length

  if (start < 0) {
    start = -start > length ? 0 : (start + length);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  // 需要获得的数组的个数
  length = start > end ? 0 : ((end - start) >>> 0);
  // 试了这句话，好像报错'Uncaught ReferenceError: Invalid left-hand side in assignment'，不是很懂
  start >>>= 0;

  let index = -1;
  const result = new Array(length);

  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;

}

export default slice;