import { Request, Response, NextFunction, response } from 'express'
import { prisma } from '../db/prisma';
import { responseSender } from '../helpers/errorHandler';
import { payloadChecker } from '../helpers/payloadChecker';

export default class RoleController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, detail } = req.body as { name: string; detail?: string }
      payloadChecker({ name })
      await prisma.roles.create({
        data: { name, detail }
      })
      responseSender(res, 201, { data: 'role created successfully!' })
    } catch (e) {
      next(e)
    }
  }
  static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await prisma.roles.findMany({
        include: {
          employees: {
            select: {
              employeeId: true
            }
          }
        }
      })
      responseSender(res, 200, { data: result })
    } catch (e) {
      next(e)
    }
  }
}