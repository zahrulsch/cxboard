import { prisma } from '../db/prisma'
import { responseSender } from '../helpers/errorHandler'
import { signToken } from '../helpers/tokenizer'
import type { Request, Response, NextFunction } from 'express'
import errorThrower from '../helpers/errorThrower'
import argon from 'argon2'

interface UserCreatePayload {
  username: string
  email: string
  password: string
  picture?: string
}

interface UserLoginPayload {
  email: string
  password: string
  username?: string
}

export default class UsersController {
  static async createUser(req: Request<any, any, UserCreatePayload>, res: Response, next: NextFunction) {
    try {
      const { email, password, picture, username } = req.body
      await prisma.users.create({
        data: { email, username, password, picture }
      })
      responseSender(res, 201, { data: 'user has been created successfully' })
    } catch (e) {
      next(e)
    }
  }

  static async loginUser(req: Request<any, any, UserLoginPayload>, res: Response, next: NextFunction) {
    try {
      const { username, password, email } = req.body
      if (!email) errorThrower({ code: 400, message: 'missing key in request', status: 'unauthorized' })
      const response = await prisma.users.findFirst({
        where: {
          OR: [ { email, username } ]
        }
      })
      
      if (!response) errorThrower({ code: 401, status: 'unauthorized', message: 'login failed' })
      if (!await argon.verify(response.password, password)) errorThrower({ code: 401, message: 'login failed', status: 'unauthorized' })
      
      const accessToken = await signToken({ username: response.username, id: response.id, email: response.email })

      responseSender(res, 200, { data: { accessToken } })
    } catch (e) {
      next(e)
    }
  }
}