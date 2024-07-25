import { z } from "zod";
import { emailRegex, passwordRegex } from "@/utils/constants";
export const SignUpFormSchema = z
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

export const SiteFormSchema = z.object({
  url: z.string().url(),
  name: z.string(),
  folder: z.string(),
  userName: z.string().min(5, {
    message: "UserName must be atleast 5 characters.",
  }),
  password: z.string().min(5, {
    message: "Password must be atleast 5 characters.",
  }),
  notes: z.string(),
});

export const NotesFormSchema = z.object({
  name: z.string().min(5, { message: "Name must be atleast 5 characters." }),
  folder: z.string(),
  notes: z.string().min(5, { message: "Notes must be atleast 5 characters." }),
});

export const CardFormSchema = z.object({
  name: z.string(),
  folder: z.string(),
  cardName: z.string().min(5, {
    message: "Name in Card must be atleast 5 characters.",
  }),
  type: z.string().min(5, {
    message: "Type of Card must be atleast 5 characters.",
  }),
  cardNumber: z.string().length(16, {
    message: "CardNumber must be valid 16 digit",
  }),
  CVVCode: z.string().length(3, { message: "CVV code must be 3 digit" }),
  startDate: z.string(),
  startYear: z.string().max(4, {
    message: "Year must be of 4 digit",
  }),
  endDate: z.string().min(2, { message: "Select the Expiery Date of Card" }),
  endYear: z.string().length(4, {
    message: "Year must be of 4 digit",
  }),
  notes: z.string(),
});

export const BankFormSchema = z.object({
  name: z.string(),
  folder: z.string(),
  bankName: z.string().min(5, {
    message: "Bank Name must be atleast 5 characters.",
  }),
  accType: z.string().min(5, {
    message: "Account Type must be atleast 5 characters.",
  }),
  accNumber: z.string().length(11, {
    message: "Account Number must be valid 11 digit",
  }),
  IFSCCode: z
    .string()
    .length(11, { message: "IFSC Code must be valid 11 digit" }),
  branchCode: z.string(),
  branchPhone: z.string(),
  notes: z.string(),
});