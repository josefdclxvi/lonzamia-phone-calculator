export const isTouch = "ontouchstart" in document.documentElement

export const isInfinity = r => {
    return r === 'Infinity' || r === 'undefined' || r === 'NaN'
}

export const isEmpty = r => {
    return r === ''
}