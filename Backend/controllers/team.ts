import type { Request, Response, NextFunction } from 'express'
import { prisma } from '../db/prisma'
import { responseSender } from '../helpers/errorHandler'
import { imageUploader } from '../helpers/imageUploader'
import { isHttpsUri } from 'valid-url'

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

interface TeamEditPayload extends Omit<TeamPrismaPayload, 'employees'> {
  employees?: {
    id: number
    employeeId: number
    code: string
    roleId: number
    name: string
    teamId: number
  }[]
}

export default class TeamController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      let { code, name, address, employees, image } = req.body as TeamPayload;

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
      responseSender(res, 201, { data: "team created successfully!" });
    } catch (e) {
      next(e);
    }
  }

  static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const teams = await prisma.teams.findMany({
        include: {
          _count: { select: { employees: true } },
        },
      });
      responseSender(res, 200, { data: teams });
    } catch (e) {
      next(e);
    }
  }

  static async detail(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const team = await prisma.teams.findFirst({
        where: { id: +id },
        include: {
          employees: {
            select: {
              id: true,
              code: true,
              employees: {
                select: { name: true, photo: true, id: true },
              },
              role: {
                select: { name: true, id: true },
              },
            },
          },
        },
      });
      if (!team) responseSender(res, 200, { data: null });
      else
        responseSender(res, 200, {
          data: {
            ...team,
            employees: team.employees.map((t) => {
              return {
                employeeCode: t.code,
                id: t.id,
                employee: {
                  id: t.employees.id,
                  name: t.employees.name,
                  photo: t.employees.photo
                },
                role: {
                  id: t.role.id,
                  name: t.role.name,
                },
              };
            }),
          },
        });
    } catch (e) {
      next(e);
    }
  }

  static async edit(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      let { code, name, address, employees, image } = req.body as TeamEditPayload

      if (image) {
        if (!isHttpsUri(image)) {
          const team = await prisma.teams.findFirst({ where: { id: +id } })
          if (team) {
            const uploader = await imageUploader(image)
            if (uploader) {
              image = uploader
            } else {
              image = team.image
            }
          }
        }
      }

      console.log(JSON.stringify(employees, null, 2))
      console.log("-------------------------")

      const update = await prisma.teams.update({
        where: { id: +id },
        data: {
          code,
          name,
          address,
          image,
          employees: {
            deleteMany: 
            {
              teamId: +id,
              NOT: employees?.map(e => (
                { id: e.id }
              ))
            },
            upsert: employees?.map(e => (
              {
                where: {
                  id: e.id
                },
                create: {
                  code: e.code,
                  employeeId: e.employeeId,
                  roleId: e.roleId
                },
                update: {
                  code: e.code,
                  employeeId: e.employeeId,
                  roleId: e.roleId
                }
              }
            ))
          }
        },
      });
      responseSender(res, 200, { data: `${update.name} updated successfully!` });
    } catch (e) {
      next(e);
    }
  }
}