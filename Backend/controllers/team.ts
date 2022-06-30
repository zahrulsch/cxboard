import type { Request, Response, NextFunction } from 'express'
import { prisma } from '../db/prisma'
import { responseSender } from '../helpers/errorHandler'
import { imageUploader } from '../helpers/imageUploader'

type TeamPrismaPayload = Parameters<typeof prisma.teams.create>['0']['data']

interface TeamPayload extends Omit<TeamPrismaPayload, 'employees'> {
  employees?: {
    employeeId: number
    role: string
    roleId: number
    employeeCode: string
    name?: string
  }[]
}

export default class TeamController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      let { code, name, address, employees, image } = req.body as TeamPayload

      if (image) {
        const uploader = await imageUploader(image);
        if (uploader) image = uploader;
      }

      await prisma.teams.create({
        data: {
          name,
          code,
          address,
          image,
          employees: {
            create: employees?.map((emp) => {
              const { employeeCode, employeeId, roleId } = emp;

              return {
                code: employeeCode,
                employeeId: employeeId,
                roleId,
              };
            }),
          },
        },
      });
      await prisma.employeeRoles.createMany({
        data:
          employees?.map((e) => ({
            employeeId: e.employeeId,
            roleId: e.roleId,
          })) || [],
      });
      responseSender(res, 201, { data: "team created successfully!" });
    } catch (e) {
      next(e)
    }
  }

  static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const teams = await prisma.teams.findMany({
        include: {
          _count: {select: {employees: true }}
        }
      })
      responseSender(res, 200, { data: teams })
    } catch (e) {
      next(e)
    }
  }

  static async detail(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const team = await prisma.teams.findFirst({
        where: { id: +id },
        include: {
          employees: {
            select: {
              code: true,
              employees: {
                select: { name: true, photo: true, id: true },
              },
              role: {
                select: { name: true, id: true }
              }
            }
          }
        }
      })
      if (!team) responseSender(res, 200, { data: null })
      else responseSender(res, 200, { data: {...team, employees: team.employees.map(t => {
        return {
          name: t.employees.name,
          photo: t.employees.photo,
          role: t.role.name,
          id: t.employees.id,
          roleId: t.role.id,
          employeeCode: t.code
        }
      })} })
    } catch (e) {
      next(e)
    }
  }
}