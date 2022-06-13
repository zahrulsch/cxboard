export interface ErrorExpressType {
  message: any
  code: number
  status: string
}

export class GeneralError implements ErrorExpressType {
  code
  message
  status

  constructor(code: number, message: string, status: string) {
    this.code = code
    this.message = message
    this.status = status
  }
}

export default function errorThrower(error: ErrorExpressType): never {
  throw new GeneralError(error.code, error.message, error.status)
}