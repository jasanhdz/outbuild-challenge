import { AxiosError } from 'axios'

export function consoleErrorHandler(err: AxiosError) {
  console.log(err?.code)
  console.log(err?.message)
  return null
}
