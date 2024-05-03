import { z } from "zod";
import { validationSchema } from "../validation";

export type PollFormFields = z.infer<typeof validationSchema>;
