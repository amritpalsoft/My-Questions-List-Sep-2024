let str = 'amrit pal'


const capitalise = str => (str.split(' ').map(i => i.slice(0, 1).toUpperCase() + i.slice(1))).join(' ')

const reverseComplete = str => str.split('').reverse().join('')

const reverseWordByWord = str => str.split(' ').map(i => i.split('').reverse().join('')).join(' ')

const reverseWordByWordLocal = str => {

    return str.split(' ').map(item => {
        let newstr = ''
        for (let i = item.length - 1; i >= 0; i--) {
            newstr += item[i]
        }
        return newstr
    }).join(' ')
}

const stringOrNot = str => typeof str === "string"

const stringBlankOrNot = str => str.trim() === ""

const extractChar = (str, char = 4) => str.slice(0, char)

const abbreviated = str => str.split(' ').map((i, index) => index === 0 ? i.slice(0) : i.slice(0, 1)).join(' ')

const hideEmail = email => {
    return email.split('@').map((part, index) =>
        index === 0 ? part.split('').map(() => '*').join('') : part
    ).join('@');
};

const addDash = str => str.split(' ').join('-')

const swapcase = str => {
    let newStr = ''
    str.split('').map(i => {
        if(i)
    })

    return newStr
}

console.log(swapcase('amrit pal software'));