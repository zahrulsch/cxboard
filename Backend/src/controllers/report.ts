import { GeneralError } from './../helpers/errorThrower';
import type { Request, Response, NextFunction } from 'express'
import { responseSender } from '../helpers/errorHandler'
import { OAuth2Client } from 'google-auth-library'
import { GoogleSpreadsheet } from 'google-spreadsheet'

const oAuth = new OAuth2Client({ clientId: '680985954441-79brl8t5ir27uhkrapqa63ckkelnq562.apps.googleusercontent.com', clientSecret: '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KF' })

export default class ReportController {
  static async get(req: Request, res: Response, next: NextFunction) {
    try {
      const { sheetId } = req.params
      const { credential } = req.headers
      if (credential) oAuth.credentials.access_token = credential as string;
      
      const sheets = new GoogleSpreadsheet(sheetId)
      sheets.useOAuth2Client(oAuth)

      await sheets.loadInfo()

      responseSender(res, 200, { data: sheets.title })
    } catch (e) {
      const { message } = e as any
      if (message) {
        next(new GeneralError(403, message, 'error permission'))
      }
      else next(e)
    }
  }
}