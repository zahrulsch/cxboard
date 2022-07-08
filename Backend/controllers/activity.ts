import type { Request, Response, NextFunction } from 'express'
import { prisma } from '../db/prisma'
import { responseSender } from '../helpers/errorHandler'
import { imageUploader } from '../helpers/imageUploader'
import { payloadChecker } from '../helpers/payloadChecker'

type ActivityCreatePayloadPrisma = Parameters<typeof prisma.activities.create>['0']['data']
interface ActivityCreatePayload extends Omit<ActivityCreatePayloadPrisma, "employees"> {
  employees?: number[]
}

export default class ActivityController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      let { name, detail, startDate, endDate, status, venue, photo, employees } = req.body as ActivityCreatePayload
      payloadChecker({ name })
      if (photo) {
        const uploader = await imageUploader(photo)
        if (uploader) photo = uploader
      }
      const create = await prisma.activities.create({ data: { name, detail, status, venue, photo, startDate: startDate ? new Date(startDate) : new Date(), endDate: endDate ? new Date(endDate) : null, employees: { createMany: { data: employees?.map((e) => { return { employeeId: e, }; }) || [], }, }, }, });
      responseSender(res, 201, {
        data: `activity with id ${create.id} created successfully`
      })
    } catch (e) {
      next(e)
    }
  }

  static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const activities = await prisma.activities.findMany()
      responseSender(res, 200, { data: activities })
    } catch (e) {
      next(e)
    }
  }
}