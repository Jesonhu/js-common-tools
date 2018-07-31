/** 时间处理功能函数 */
// const getNowData = require('./getNowData');

const { isStrEmpty } = require('../util');

/**
 * 日期常用工具类
 * 
 * @see https://github.com/XuXiaoGH/dateformat.js/blob/master/dateformat.js 
 */
class Date {
  constructor() {
    this.timer = 1;
  }

  /**
   * 格式化时间
   * 
   * @param {Date} date `Date`对象
   * @param {string} fmt `需要的格式`
   * @return {string} 格式化后的时间
   * 
   * @example 
   * ```
   * const date1 = new cTools.Date();
   * 
   * dat1.format(new Date());
   * // => '2018-07-27 14:24:11'
   * 
   * date1.format(new Date(), 'yyyy');
   * // => '2018'
   * 
   * date1.format(new Date(), 'dd-MM-yyy hh:mm:ss');
   * // => "27-07-018 14:26:54"
   * ```
   */
  format(date, fmt = 'yyyy-MM-dd hh:mm:ss') {
    var o = {
      'M+': date.getMonth() + 1, //月份
      'd+': date.getDate(), //日
      'h+': date.getHours(), //小时
      'm+': date.getMinutes(), //分
      's+': date.getSeconds(), //秒
      'q+': Math.floor((date.getMonth() + 3) / 3), //季度
      'S': date.getMilliseconds() //毫秒
    };

    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
      }
    }
    return fmt;
  }
  
  getNowData() {
    // @see call() bind()
    // @see https://blog.csdn.net/ganyingxie123456/article/details/70855586
    return getNowData.apply(this, arguments);
  }

}

module.exports = Date;