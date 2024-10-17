import { SignJWT, jwtVerify } from 'jose'
import { User } from '@/types/auth'
import { JWT_SECRET_KEY } from '@/constants/auth'

const getSecretKey = (): Uint8Array => {
  return new TextEncoder().encode(JWT_SECRET_KEY)
}

export const generateToken = async (user: User, rememberMe: boolean): Promise<string> => {
  const secret = getSecretKey();
  const expirationTime = rememberMe ? '7d' : '1h';
  const token = await new SignJWT({ ...user })
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setExpirationTime(expirationTime)
    .sign(secret)
  return token
}


export const verifyToken = async (token: string): Promise<User | null> => {
  try {
    const secret = getSecretKey()
    const { payload } = await jwtVerify(token, secret)
    const user: User = {
      email: payload?.email as string,
      fullName: payload?.fullName as string,
    }
    return user
  } catch (error) {
    console.log(error)
    return null
  }
}