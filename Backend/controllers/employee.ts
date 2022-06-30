import { prisma } from "../db/prisma";
import { payloadChecker } from '../helpers/payloadChecker'
import { responseSender } from "../helpers/errorHandler"
import type { Response, Request, NextFunction } from 'express'
import { Prisma } from "@prisma/client";
import { imageUploader } from "../helpers/imageUploader";

type EmployeeCreatePayload = Parameters<typeof prisma.employees.create>['0']['data']
type RolesCreatePayload = Parameters<typeof prisma.roles.create>['0']['data']
type SchoolCreatePayload = {
  id: number
  name: string
  level: 'sma' | 'smp' | 'sd' | 'tk' | 'pts' | 'ptn'
  graduateYear: number
  schoolId: number
}

interface EmployeePayload extends Omit<EmployeeCreatePayload, 'schools' | 'roles'> {
  schools?: SchoolCreatePayload[]
  roles?: RolesCreatePayload[]
}

export default class EmployeeController {
  static async create(req: Request<any, any, EmployeePayload>, res: Response, next: NextFunction) {
    try {
      const { dateOfBirth, email, gender, marriageStatus, name, placeOfBirth, address, photo, schools, roles } = req.body
      payloadChecker<EmployeePayload>({ dateOfBirth, email, gender, marriageStatus, name, placeOfBirth })
      let photoUrl = ''

      if (photo) {
        const imageUpload = await imageUploader(photo)
        if (imageUpload) photoUrl = imageUpload
      }

      await prisma.employees.create({
        data: { 
          dateOfBirth: 	new Date(dateOfBirth), 
          email, 
          gender, 
          marriageStatus, 
          name, 
          placeOfBirth, 
          address, 
          photo: photoUrl,
          schools: {
            create: schools?.map(school => {
              const { name, level, graduateYear, schoolId } = school
              return {
                schools: {
                  connectOrCreate: {
                    where: { id: schoolId },
                    create: { name, level }
                  }
                },
                graduateYear
              }
            })
          },
          roles: {
            create: roles?.map(role => {
              const { id, name, detail } = role
              return {
                roles: {
                  connectOrCreate: {
                    where: { id },
                    create: { name, detail }
                  }
                }
              }
            })
          },
        }
      })
      responseSender(res, 201, { data: 'employee added successfully' })
    } catch (e) {
      next(e)
    }
  }
  
  static async list(req: Request<any, any>, res: Response, next: NextFunction) {
    try {
      const { name, email, sortBy, sortType, gender } = req.query as {[key: string]: string | undefined}

      const filter: Prisma.Enumerable<Prisma.EmployeesWhereInput> = []

      if (name) filter.push({ name: { contains: name, mode: 'insensitive' } })
      if (email) filter.push({ email: { equals: email, mode: 'insensitive' } })
      if (gender) filter.push({ gender: { equals: gender as 'MALE'|'FEMALE'|undefined } })

      const result = await prisma.employees.findMany({
        where: {
          AND: filter,
        },
        orderBy: [
          {
            [sortBy || "createdAt"]: sortType || "asc",
          },
        ],
        include: {
          schools: {
            select: {
              graduateYear: true,
              schools: {
                select: { name: true, id: true, level: true },
              },
              id: true,
            },
          },
          roles: {
            select: {
              roles: {
                select: { name: true, id: true },
              },
            },
          },
          teams: {
            select: {
              teams: {
                select: {
                  name: true
                }
              },
              role: {
                select: {
                  name: true
                },
              }
            }
          },
        },
      });
      responseSender(res, 200, {
        data: result.map((res) => {
          const { schools, roles, teams } = res;
          return {
            ...res,
            schools: schools.map((sc) => ({
              id: sc.id,
              name: sc.schools.name,
              level: sc.schools.level,
              schoolId: sc.schools.id,
              graduateYear: sc.graduateYear,
            })),
            roles: roles
              .map((r) => ({ name: r.roles.name, id: r.roles.id }))
              .reduce((p, c) => {
                const pd = [...p];
                if (!pd.some(v => v.id === c.id)) pd.push(c);
                return pd;
              }, [] as { name: string; id: number }[]),
            teams: teams.map((t) => ({
              name: t.teams.name,
              role: t.role.name,
            })),
          };
        }),
      });
    } catch (e) {
      next(e)
    }
  }

  static async edit(req: Request<any, any, Partial<EmployeePayload>>, res: Response, next: NextFunction) {
    try {
      const { address, dateOfBirth, email, gender, marriageStatus, name, photo, placeOfBirth, schools } = req.body
      const { id } = req.params

      await prisma.employees.update({
        where: { id: +id },
        data: { 
          address, 
          dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : dateOfBirth, 
          email, 
          gender, 
          marriageStatus, 
          name, 
          photo, 
          placeOfBirth,
          schools: {
            upsert: schools?.map(sc => {
              const { graduateYear, id, level, name, schoolId } = sc
              return {
                where: { id },
                create: {
                  graduateYear,
                  schools: {
                    connectOrCreate: {
                      where: { id: schoolId },
                      create: { name, level }
                    }
                  }
                },
                update: { graduateYear }
              }
            })
            
          }
        }
      })
      responseSender(res, 200, { data: `employee with id ${id} updated successfully`})
    } catch (e) {
      next(e)
    }
  }

  static async delete(req: Request<any, any>, res: Response, next: NextFunction) {
    try {
      const { id } = req.params

      await prisma.employees.delete({
        where: { id: +id }
      })
      responseSender(res, 200, {data: `employee with id ${id} deleted successfully`})
    } catch (e) {
      next(e)
    }
  }

  static async getOne(req: Request<any, any>, res: Response, next: NextFunction) {
    try {
      const { id } = req.params

      const findOne = await prisma.employees.findFirst({
        where: { id: +id },
        include: {
          schools: {
            select: {
              graduateYear: true,
              schools: {
                select: { name: true, id: true, level: true },
              },
              id: true
            }
          },
          roles: true,
          teams: true
        }
      })

      if (!findOne) responseSender(res, 404, { data: findOne })
      else responseSender(res, 200, { data: {
        ...findOne,
        schools: findOne.schools.map(sc => {
          return {
            id: sc.id,
            name: sc.schools.name,
            level: sc.schools.level,
            schoolId: sc.schools.id,
            graduateYear: sc.graduateYear
          }
        })
      }})
    } catch (e) {
      next(e)
    }
  }
}