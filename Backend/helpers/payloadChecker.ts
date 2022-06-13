import errorThrower from "./errorThrower"

export function payloadChecker<T={[key: string]: any}>(payload: T) {
  const missing = (Object.keys(payload) as Array<keyof T>).filter(key => payload[key] === undefined)
  if (missing.length) errorThrower({code: 400, message: missing, status: 'missing required fields'})
}