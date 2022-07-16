import type { Response, Request, NextFunction } from 'express'
import { prisma } from '../db/prisma'
import { oauth } from '../helpers/oauth'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import errorThrower, { GeneralError } from '../helpers/errorThrower'
import { responseSender } from '../helpers/errorHandler'

export default class SheetController {
  static async getSummary(req: Request, res: Response, next: NextFunction) {
    try {

    } catch(e) {
      next(e)
    }
  }

  static async getTest(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const g_access_key = req.headers['x-g-access-key']

      if (!id) errorThrower({ code: 400, message: 'sheet ID is required', status: 'bad request' })
      if (!g_access_key) errorThrower({ code: 400, message: 'x-g-access-key is missing from headers', status: 'bad request' })

      oauth.credentials.access_token = g_access_key as string
      const sheets = new GoogleSpreadsheet(id)

      sheets.useOAuth2Client(oauth)
      await sheets.loadInfo()

      // const sheet = sheets.sheetsByTitle['Penjualan']
      // await sheet.loadCells('B5:L104')

      // let result: { name: string; employeeCode: string; teamCode: string; item: number; sold: number; problem: number; profit: number; }[] = [];

      // for (let i = 5; i <= 104; i++ ) {
      //   const name = sheet.getCellByA1(`B${i}`).value
      //   const code = sheet.getCellByA1(`C${i}`).value
      //   const sold = sheet.getCellByA1(`G${i}`).value
      //   const problem = sheet.getCellByA1(`I${i}`).value
      //   const profit = sheet.getCellByA1(`K${i}`).value
      //   const item = sheet.getCellByA1(`E${i}`).value

      //   if (typeof name === 'string' && name) {
      //     result.push({
      //       employeeCode: String(code)[1],
      //       teamCode: String(code)[0],
      //       item: Number(item),
      //       name: String(name),
      //       problem: Number(problem),
      //       profit: Number(profit),
      //       sold: Number(sold),
      //     })
      //   }
      // }

      // console.log(result)

      const { title } = sheets
      responseSender(res, 200, { data: title })
    } catch (e) {
      const { message } = e as any
      if (message) {
        next(new GeneralError(403, message, 'error permission'))
      }
      else next(e)
    }
  }
}