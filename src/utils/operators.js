export const operator = ['modulo','add', 'subtract', 'multiply', 'divide']

const s = [
    {name: operator[0], code: '%', symbol: '%'},
    {name: operator[1], code: '+', symbol: '+'},
    {name: operator[2], code: '-', symbol: '−'},
    {name: operator[3], code: '*', symbol: '×'},
    {name: operator[4], code: '/', symbol: '÷'},
    {name: 'decimal', code: '.', symbol: '.'},
]

export const getSymbol = v => {
    return s.find(x => x.name === v )
}