import { PrismaClient } from '../prisma_client'
import argon2 from 'argon2'

const prisma = new PrismaClient()

prisma.$use(async(param, next) => {
  if (param.model === 'Users') {
    if (param.args.data?.password) {
      const hashedPassword = await argon2.hash(param.args.data.password, { hashLength: 30 })
      param.args.data.password = hashedPassword
    }
  }
  return await next(param)
})

export { prisma }
