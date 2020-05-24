export const getFontSize = x => {
    const fontSize = x > 6 ? (x > 8 ? (x > 10 ? (x > 12 ? (x > 14 ? (x > 16 ? (x > 18 ? (x > 20 ? (x > 22 ? 1 : 1.15) : 1.2) : 1.3) : 1.5) : 1.6) : 1.85) : 2 ) : 2.5) : 3
    return fontSize
}

export const numLength = r => {
    return Math.ceil(Math.log10(r + 1))
}