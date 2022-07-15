import { Prisma } from '../prisma_client'
import type { Request, Response, NextFunction } from 'express'
import { prisma } from '../db/prisma'
import { responseSender } from '../helpers/errorHandler'

interface ListQuery {
  limit?: number
  name?: string
  level?: 'tk' | 'sd' | 'smp' | 'sma' | 'ptn' | 'pts'
}

export default class SchoolController {
  static async list(req: Request<any, any, any, ListQuery>, res: Response, next: NextFunction) {
    try {
      const { level, limit, name } = req.query

      const filter: Prisma.Enumerable<Prisma.SchoolsWhereInput> = []

      level && ['tk', 'sd', 'smp', 'sma', 'ptn', 'pts'].includes(level) && filter.push({ level });
      name && filter.push({ name: { contains: name, mode: 'insensitive' } });

      const schools = await prisma.schools.findMany({
        where: {
          AND: filter
        },
        take: limit ? +limit : 10
      })

      responseSender(res, 200, { data: schools })
    } catch (e) {
      next(e)
    }
  }
}