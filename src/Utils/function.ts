
/**
 *
    * @param {string} text - The input text to be truncated.
    * @param {number} [max=60] - The maximum allowed length of the text before truncation. Defaults to 60.
    * @returns {string} The truncated text with "..." appended if it was longer than the limit, otherwise the original text.
 *
 */

export function textSlice (text: string, max: number = 55) {
    const textResult = text.length >= max ? `${text.slice(0,max)}...` : text
    return textResult
}


export function editPriceComaa(price: string) {
    const number = Number(price)
    return number.toLocaleString("en-US")
}