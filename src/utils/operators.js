const s = [
    {name: 'add', code: '+', symbol: '+'},
    {name: 'subtract', code: '-', symbol: '−'},
    {name: 'multiply', code: '*', symbol: '×'},
    {name: 'divide', code: '/', symbol: '÷'},
    {name: 'decimal', code: '.', symbol: '.'},
    {name: 'modulo', code: '%', symbol: '%'},
]

export const getSymbol = v => {
    return s.find(x => x.name === v )
}