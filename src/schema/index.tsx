import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required") // Single error message for missing email
    .email("Invalid email address"), // Another error for invalid email format
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const signUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});
export const transactionSchema = z.object({
  name: z.string().min(1, "Name is required"), // Ensure name is not empty
  qty: z.number().min(1, "Quantity must be at least 1"), // Ensure qty is at least 1
  amount: z.number().min(0, "Amount must be at least 0"), // Ensure amount is non-negative
  payment: z.string().min(1, "Payment method is required"), // Ensure payment method is not empty
  status: z.enum(
    ["Pending", "Done"],
    "Status must be either 'Pending' or 'Done'"
  ),
});
