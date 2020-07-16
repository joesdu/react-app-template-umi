interface String {
  /**
   * 是否是空字符串或者空
   */
  isNullOrEmpty(): boolean;
  /**
   * 对当前字符串进行正则匹配
   * @param reg 正则表达式
   */
  test(reg: RegExp): boolean;
  /**
   * 是否是Url
   */
  isUrl(): boolean;
  /**
   * 按指定长度分段字符串
   * @param len:number 指定长度(正整数)
   * @returns Array<string> (字符串数组)
   */
  segment(len: number): Array<string>;
  /**
   * 转到数字
   */
  toNumber(): number;
}

interface StringConstructor {
  /**
   * 获取一个自定义长度的随机字符串,默认16位长度
   */
  random(expect: number): string;
}
