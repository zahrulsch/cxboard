import { prisma } from '../db/prisma'
import { responseSender } from '../helpers/errorHandler'
import { signToken } from '../helpers/tokenizer'
import type { Request, Response, NextFunction } from 'express'
import errorThrower from '../helpers/errorThrower'
import argon from 'argon2'
import { imageUploader } from '../helpers/imageUploader'

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

interface UserEditPayload {
  centerSheetId?: string
  createdAt?: string
  picture?: string
  email?: string
  password?: string
  username?: string
  id?: number
  oldPassword?: string
  googleCredential?: string
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

  static async info(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req['headers']['user-identity']
      if (!userId) errorThrower({ code: 401, message: 'user is not recognized', status: 'unauthorized' })
      
      const user = await prisma.users.findFirst({
        where: { id: +userId },
        select: {
          id: true,
          username: true,
          email: true,
          picture: true,
          createdAt: true,
          centerSheetId: true,
          googleCredential: true
        }
      })

      if (!user) errorThrower({ code: 401, message: 'user is not recognized', status: 'unauthorized' })
      responseSender(res, 200, { data: user })
    } catch (e) {
      next(e)
    }
  }

  static async edit(req: Request, res: Response, next: NextFunction) {
    try {
      let { email, oldPassword, password, picture, username, centerSheetId, googleCredential } = req.body as UserEditPayload
      const id = req.headers['user-identity']
      if (!id) errorThrower({ code: 401, message: 'user is not recognized', status: 'unauthorized' })
      if (!oldPassword) errorThrower({ code: 400, message: 'old password is required', status: 'bad request' })
      
      const user = await prisma.users.findFirst({ where: { id: +id } })
      if (!user) errorThrower({ code: 401, message: 'user is not recognized', status: 'unauthorized' })
      if (!await argon.verify(user.password, oldPassword)) errorThrower({ code: 401, message: 'user is not recognized', status: 'unauthorized' })

      if (picture) {
        const uploader = await imageUploader(picture)
        if (uploader) picture = uploader
      }

      const update = await prisma.users.update({
        where: { id: user.id },
        data: {
          username,
          email,
          password: !password ? undefined : password,
          picture,
          centerSheetId,
          googleCredential
        },
      });

      responseSender(res, 200, { data: `user with id ${update.id} updated successfully` })
    } catch (e) {
      next(e)
    }
  }
}