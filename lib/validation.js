'use strict';

const fs = require('fs');

module.exports = {
  notEmpty: v => {
    return `${v}`.trim().length > 0;
  },
  isHyphen: v => {
    // * 只能包含小写字母、数字和中划线
    // * 首字符只能为小写字母
    // * 最后一个字符不能为中划线
    // * 不能连续两个中划线
    // * 不能为空
    const reg = /^(?=[a-z])(?!.*\-$)(?!.*\-{2})[a-z0-9\-]+$/;

    return reg.test(`${v}`.trim());
  },
  nameConflict: (v, checkPath) => {
    const dir = fs.readdirSync(checkPath);

    return dir.indexOf(`${v}`.trim()) > -1;
  }
};