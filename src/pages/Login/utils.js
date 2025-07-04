import z from "zod";

export const loginValidationSchema = z.object({
  email: z.string({ required_error: "O email é obrigatório" }).email("O email é invalido"),
  senha: z.string({ required_error: "A senha é obrigatória" }).min(1, "A senha é obrigatória"),
});
