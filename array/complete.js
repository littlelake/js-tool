/**
 * @description 判断两个值是否相等
 * @param {*} a - 代表对象，数组或boolean 
 * @param {*} b - 代表对象，数组或boolean
 */
const complete = (a, b) => {
  // 判断是Array类型还是Object或是Boolean
  const aType = toString.call(a);
  // 如果长度不相等的情况下返回false
  if (a.length !== b.length) return false;
  // 类型不同的情况下
  if (aType !== toString.call(b)) return false;

  switch (aType) {
    case '[Object String]':
      // 都是字符串的情况下
      return a === b;
    case '[Object Number]':
      // 都是数字的情况下
      return a === b;
    case '[Object Boolean]':
      // 都是boolean类型的情况下
      return a === b;
    case '[Object Array]':
      a.forEach((item, key) => {
        const itemType = toString.call(item);
        // 数组中的元素又是数组或是对象的情况下
        if (itemType === '[Object Array]' || itemType === '[Object Object]') {
          complete(a, b);
        } else {
          if (item !== b[key]) return false;
        }
      });
      return true;
    case '[Object Object]':
      // 都是对象的情况下
      const aKeys = Object.keys(a);
      aKeys.forEach(item => {
        if (a[item] !== b[item]) return false;
      });
      return true;
    default:
      // 默认返回不相等，false
      return false;
  }

}

export default complete;