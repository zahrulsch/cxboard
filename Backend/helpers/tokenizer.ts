import jwt from 'jsonwebtoken'

const secret = process.env.SECRET_JWT
export function signToken(payload: any) {
  return new Promise<string|undefined>((resolve, reject) => {
    jwt.sign(payload, secret || '', {}, function(err, encoded) {
      if (!err) resolve(encoded)
      else reject(err)
    })
  })
}

export function verifyToken(token: string) {
  return new Promise<any>((resolve, reject) => {
    jwt.verify(token, secret || '', {}, function(err, decoded) {
      if (!err) resolve(decoded)
      else reject(err)
    })
  })
}
