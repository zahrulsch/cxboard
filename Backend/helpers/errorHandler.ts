import { Prisma } from '@prisma/client'
import { NextFunction } from 'connect'
import { Request, Response } from 'express'
import { ErrorExpressType, GeneralError } from './errorThrower'
import { JsonWebTokenError } from 'jsonwebtoken'

export interface DataResponse<DataType=any> {
  data: DataType
}

export function errorResponseSender(res: Response, code: number, error: ErrorExpressType) {
  res.status(code).json(error)
}

export function responseSender<Data=any>(res: Response, status: number, data: DataResponse<Data>) {
  res.status(status).json(data)
}

export default function errorHandler(e: any, req: Request, res: Response, next: NextFunction) {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    errorResponseSender(res, 400, {code: 400, status: e.code, message: e.meta || '' })
  } else if (e instanceof Prisma.PrismaClientValidationError) {
    errorResponseSender(res, 400, { code: 400, status: e.name, message: 'validation error' })
  } else if (e instanceof GeneralError) {
    errorResponseSender(res, e.code, { code: e.code, message: e.message, status: e.status })
  } else if (e instanceof JsonWebTokenError) {
    errorResponseSender(res, 401, { code: 401, status: 'unauthorized', message: e.message })
  } else if (e instanceof SyntaxError) {
    errorResponseSender(res, 400, { code: 400, status: 'syntax error', message: e.message })
  } else {
    errorResponseSender(res, 500, { status: 'Error', message: 'internal server error', code: 500 })
  }
  console.log(e)
}
