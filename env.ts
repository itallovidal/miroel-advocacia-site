import { z } from 'zod'

export const envValidation = z.object({
  MAILTRAP_AUTH_USER: z.string(),
  MAILTRAP_AUTH_PASS: z.string(),
})

const envParsed = envValidation.safeParse(import.meta.env)

if (!envParsed.success) throw new Error('Local variables error.')

export const env = envParsed.data
