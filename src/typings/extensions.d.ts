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

interface Number {
  /**
   * 对小数进行四舍五入
   * @param precision 保留位数,默认2位
   */
  round(precision: number): number;
}

interface NumberConstructor {
  /**
   * 获取最小值到最大值之前的整数随机数
   * @param min: number min  最小值
   * @param max: number max  最大值
   * @returns number 最小值到最大值之前的整数随机数
   */
  random(min: number, max: number): number;
}
