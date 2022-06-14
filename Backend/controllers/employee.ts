import { prisma } from "../db/prisma";
import { payloadChecker } from '../helpers/payloadChecker'
import { responseSender } from "../helpers/errorHandler"
import type { Response, Request, NextFunction } from 'express'
import { Prisma } from "@prisma/client";

type EmployeeCreatePayload = Parameters<typeof prisma.employees.create>['0']['data']
type SchoolCreatePayload = Parameters<typeof prisma.schools.create>['0']['data']
type RolesCreatePayload = Parameters<typeof prisma.roles.create>['0']['data']

interface EmployeePayload extends Omit<EmployeeCreatePayload, 'schools' | 'roles'> {
  schools?: SchoolCreatePayload[]
  roles?: RolesCreatePayload[]
}

export default class EmployeeController {
  static async create(req: Request<any, any, EmployeePayload>, res: Response, next: NextFunction) {
    try {
      const { code, dateOfBirth, email, gender, marriageStatus, name, placeOfBirth, address, photo, schools, roles } = req.body
      payloadChecker<EmployeePayload>({ code, dateOfBirth, email, gender, marriageStatus, name, placeOfBirth })

      await prisma.employees.create({
        data: { 
          code, 
          dateOfBirth: 	new Date(dateOfBirth), 
          email, 
          gender, 
          marriageStatus, 
          name, 
          placeOfBirth, 
          address, 
          photo,
          schools: {
            create: schools
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
          }
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
      if (gender) filter.push({ gender: { equals: gender as 'MALE'|'FEMALE' } })

      const result = await prisma.employees.findMany({
        where: {
          AND: filter
        },
        orderBy: [{
          [sortBy || 'createdAt']: sortType || 'asc'
        }],
        include: {
          schools: {
            select: {
              name: true,
              createdAt: true,
              updatedAt: true,
              graduateDate: true,
              id: true,
              level: true,
              address: true
            }
          },
          roles: {
            select: {
              roles: {
                select: { name: true, id: true },
              }
            }
          }
        }
      })
      responseSender(res, 200, { data: result })
    } catch (e) {
      next(e)
    }
  }

  static async edit(req: Request<any, any, Partial<EmployeePayload>>, res: Response, next: NextFunction) {
    try {
      const { address, code, dateOfBirth, email, gender, marriageStatus, name, photo, placeOfBirth, schools } = req.body
      const { id } = req.params

      await prisma.employees.update({
        where: { id: +id },
        data: { 
          address, 
          code, 
          dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : dateOfBirth, 
          email, 
          gender, 
          marriageStatus, 
          name, 
          photo, 
          placeOfBirth,
          schools: {
            deleteMany: {
              NOT: schools?.map(school => ({id: school.id}))
            },
            upsert: schools?.map(school => {
              const { id, ...rest } = school
              return {
                where: {id},
                update: {...rest, graduateDate: rest.graduateDate ? new Date(rest.graduateDate) : rest.graduateDate},
                create: {...rest, graduateDate: rest.graduateDate ? new Date(rest.graduateDate) : rest.graduateDate}
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

      await prisma.schools.deleteMany({
        where: { employeeId: +id }
      })

      await prisma.employees.delete({
        where: { id: +id }
      })
      responseSender(res, 200, {data: `employee with id ${id} deleted successfully`})
    } catch (e) {
      next(e)
    }
  }
}