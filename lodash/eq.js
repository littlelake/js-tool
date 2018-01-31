/**
 * @description 判断两个值是否相等
 * @param {*} value - 第一个值
 * @param {*} other - 第二个值
 * @example
 * const object = { 'a': 1 }
 * const other = { 'a': 1 }
 *
 * eq(object, object)
 * // => true
 *
 * eq(object, other)
 * // => false
 *
 * eq('a', 'a')
 * // => true
 *
 * eq('a', Object('a'))
 * // => false
 *
 * eq(NaN, NaN)
 * // => true
 */

function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

export default eq;