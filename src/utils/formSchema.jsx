import { z } from "zod";
import { emailRegex, passwordRegex } from "@/utils/constants";
export const FormSchema = z
  .object({
    email: z.string().regex(emailRegex, {
      message: "Invalid email addresss",
    }),
    password: z.string().regex(passwordRegex, {
      message:
        "Your password must contain aleast one uppercase, lowercase, special and number characters",
    }),
    cnfPassword: z.string(),
    reminder: z.string(),
  })
  .refine((data) => data.password === data.cnfPassword, {
    message: "passwordMismatchErrorMessage",
    path: ["cnfPassword"],
  });
