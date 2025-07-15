import { z } from "zod";

export const envValidation = z.object({
  VITE_EMAILJS_SERVICE_ID: z.string(),
  VITE_EMAILJS_TEMPLATE_ID: z.string(),
  VITE_EMAILJS_PUBLIC_KEY: z.string(),
});

const envParsed = envValidation.safeParse(import.meta.env);

if (!envParsed.success) throw new Error("Local variables error.");

export const env = envParsed.data;
