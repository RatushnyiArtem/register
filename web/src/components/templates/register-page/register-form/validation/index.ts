import { z } from "zod";
import { Gender } from "@/types/gender";

export const validationSchema = z.object({
  username: z
    .string({ required_error: "Specify username" })
    .min(4, "Username must have at least 4 characters")
    .max(32, "Username must be at most 32 characters"),
  firstName: z
    .string({ required_error: "Specify first name" })
    .min(2, "First name must be at least 4 characters")
    .max(32, "First name must be at most 32 characters"),
  lastName: z
    .string({ required_error: "Specify last name" })
    .min(4, "Last name must be at least 4 characters")
    .max(32, "Last name must be at most 32 characters"),
  gender: z.nativeEnum(Gender),
  password: z
    .string({ required_error: "Specify password" })
    .min(6, "Password must be at least 6 characters")
    .max(32, "Password must be at most 32 characters"),
});
