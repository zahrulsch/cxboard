export function capitalized(text?: string) {
  if (!text) return ''
  if (typeof text !== 'string') return text
  return text.split(' ').map(letter => letter[0].toUpperCase() + letter.substring(1).toLowerCase()).join(' ')
}