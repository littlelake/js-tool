const HASH_UNDEFINED = '__lodash_hash_undefined__';

class Hash {
  constructor(entries) {
    let index = -1;
    const length = entries == null ? 0 : entries.lenggth;

    this.clear();
    while (++index < length) {
      const entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * @description 从哈希中删除所有的键值条目
   */
  clear() {
    this.__data__ = Object.create(null);
    this.size = 0;
  }

  /**
   * @description 删除哈希中键和它所对应的值
   * @param {*} key - 键
   * @return {boolean} true代表删除，false代表没有删除
   */
  delete(key) {
    const result = this.has(key) && delete this.__data__[key];
    this.size = result ? 1 : 0;
    return result;
  }

  /**
   * @description 检查哈希中当前键所对应的值是否存在
   * @param {*} key - 键
   * @return {boolean}
   */
  has(key) {
    const data = this.__data__;
    return data[key] !== undefined;
  }

  /**
   * @description 获取key所对应的value值
   * @param {*} key - 键
   * @return {*} 获取key所对应的值
   */
  get(key) {
    const data = this.__data__;
    const result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  /**
   * @description 添加一个值
   * @param {*} key - 键 
   * @param {*} value - 值
   * @return {*} 返回Hash对象
   */
  set(key, value) {
    const data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = value === undefined ? HASH_UNDEFINED : value;
    return this;
  }
}

export default Hash;