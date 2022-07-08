export function debounceThis<F extends (...params: any[]) => void>(fn: F, wait=300) {
  let timer: any
  return function(this: any, ...args: any[]) {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), wait)
  }
}