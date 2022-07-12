import type { Request, Response, NextFunction } from 'express'
import { prisma } from '../db/prisma'
import { responseSender } from '../helpers/errorHandler'

export default class ParticipantController {
  static async listOf(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const participants = await prisma.employeeActivities.findMany({
        where: {
          activityId: +id
        },
        select: {
          employee: {
            select: {
              id: true,
              name: true,
              photo: true
            }
          }
        }
      })
      responseSender(res, 200, { data: participants.map(p => p.employee) })
    } catch (e) {
      next(e)
    }
  }
}