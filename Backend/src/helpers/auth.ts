import type { Request, Response, NextFunction } from 'express'
import { prisma } from '../db/prisma'
import { verifyToken } from './tokenizer'
import errorThrower from './errorThrower'

export async function auth(req: Request, res: Response, next: NextFunction) {
  try {
    const { authorization } = req.headers
    if (!authorization) errorThrower({ code: 401, message: 'missing authorization header', status: 'unauthorized' })

    const dataToken: { id: number } = await verifyToken(authorization)
    const response = await prisma.users.findFirst({
      where: { id: dataToken.id }
    })
    if (!response) errorThrower({ code: 401, message: 'user is not recognized', status: 'unauthorized' })

    req['headers']['user-identity'] = String(response.id)

    next()
  } catch(e) {
    next(e)
  }
}
