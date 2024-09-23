let obj = {}

obj.userCont = function (req, res, next) {
    res.end('avva')
}

obj.userCont2 = function (req, res, next) {
    res.end('avva2')
}

module.exports = obj;