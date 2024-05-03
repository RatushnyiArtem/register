import { useState } from "react";
import { redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, FormHelperText } from "@mui/material";

import Button from "@/components/common/ui/button";
import Input from "@/components/common/ui/form/input";
import GenderGroup from "./components/gender-radio";

import { RegisterFormFields } from "./types";
import { validationSchema } from "./validation";

import AuthAPI from "@/lib/api/auth/AuthAPI";
import getErrorMessage from "@/lib/utils/getErrorMessage";

import styles from "./RegisterForm.module.scss";

const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm<RegisterFormFields>({
    resolver: zodResolver(validationSchema),
  });

  const [isSent, setIsSent] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSent(true);
      await AuthAPI.register(data);
      return redirect("/login");
    } catch (error: unknown) {
      const message = getErrorMessage(error);
      setError("root", { message });
    } finally {
      setIsSent(false);
    }
  });

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <Input
        id="username"
        label="Username"
        {...register("username")}
        error={errors.username?.message}
      />
      <Input
        id="firstName"
        label="First Name"
        {...register("firstName")}
        error={errors.firstName?.message}
      />
      <Input
        id="lastName"
        label="Last Name"
        {...register("lastName")}
        error={errors.lastName?.message}
      />
      <Box sx={{ marginLeft: 1 }}>
        <GenderGroup {...register("gender")} error={errors.gender?.message} />
      </Box>
      <Input
        id="password"
        label="Password"
        {...register("password")}
        type="password"
        error={errors.lastName?.message}
      />
      <Button text="Register" type="submit" disabled={isSent} />
      {errors.root?.message && (
        <FormHelperText error>{errors.root.message}</FormHelperText>
      )}
    </form>
  );
};

export default RegisterForm;
