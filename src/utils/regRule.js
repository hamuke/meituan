// 检验密码强度的正则表达式
const regRule = {
    reg: /^[0-9]{6,16}$|^[a-zA-Z]{6,16}$/, //全是数字或全是字母：6-16个字符
    reg1: /^[A-Za-z0-9]{6,16}$/, //数字、26个英文字母：6-16个字符
    reg2: /^\w{6,16}$/, // 由数字、26个英文字母或者下划线组成的字符串：6-16个字符

    //定义三个正则 表示纯数字 字母 特殊字符
    regNum: /^\d+$/,
    regLetter: /^[a-z]+$/i,
    regChar: /^[^0-9a-z]+$/i,

    //定义三个正则 表示 包含数字 字母 特殊字符
    _regNum: /\d+/,
    _regLetter: /[a-z]+/i,
    _regChar: /[^0-9a-z]+/i,
}

export default regRule;