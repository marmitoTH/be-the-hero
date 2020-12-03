import { Request, Response, NextFunction } from 'express'
import authConfig from '../../config/auth'
import jwt from 'jsonwebtoken'

interface Payload {
  iat: number,
  exp: number,
  sub: string
}

function auth(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    return response.status(401).json()
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = jwt.verify(token, authConfig.jwt.secret)
    const { sub } = decoded as Payload

    request.user = {
      id: sub
    }

    return next()
  } catch {
    return response.status(401).json()
  }
}

export default auth
