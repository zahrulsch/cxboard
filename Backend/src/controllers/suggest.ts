import { prisma } from "../db/prisma";
import type { Request, Response, NextFunction } from "express";
import { responseSender } from "../helpers/errorHandler";

export default class SuggestController {
  static async employee(req: Request, res: Response, next: NextFunction) {
    try {
      let result = [] as { name: string; id: number; type: string; photo: string | null; }[];
      const { id } = req.params;

      const find = await prisma.employees.findFirst({ where: { id: +id }, select: { teams: { select: { teamId: true } }, schools: { select: { schoolId: true } } } });
      
      if (find) {
        const teams = await prisma.teams.findMany({
          where: { OR: find.teams.map((t) => ({ id: t.teamId })) },
          select: {
            employees: {
              select: {
                employees: { select: { name: true, id: true, photo: true } },
              },
            },
          },
          take: 4
        });
        const schools = await prisma.schools.findMany({
          where: {
            OR: find.schools.map(s => ({
              id: s.schoolId
            }))
          },
          select: {
            employees: {
              select: {
                employeess: { select: { name: true, id: true, photo: true } }
              }
            }
          },
          take: 4
        })

        teams.forEach(t => { t.employees.forEach((e) => { if (e.employees.id !== +id) { if (!result.map((r) => r.id).includes(e.employees.id)) { result.push({ id: e.employees.id, name: e.employees.name, photo: e.employees.photo, type: "Teman di tim yang sama", }); } } }); })
        schools.forEach(t => { t.employees.forEach((e) => { if (e.employeess.id !== +id) { if (!result.map((r) => r.id).includes(e.employeess.id)) { result.push({ id: e.employeess.id, name: e.employeess.name, photo: e.employeess.photo, type: "Teman dari sekolah yang sama", }); } } }); })
      }

      responseSender(res, 200, {
        data: result.slice(0, 10),
      });
    } catch (e) {
      next(e);
    }
  }
}
