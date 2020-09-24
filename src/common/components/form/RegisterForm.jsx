import React from "react";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";

import ButtonPrimary from "../button/ButtonPrimary";

const RegisterForm = ({ signup }) => {
  const { register, handleSubmit, errors, getValues } = useForm();

  // field configs
  const emailConfig = {
    required: true,
    validate: (input) => isEmail(input) || "Unesite validnu email adresu.",
  };

  const passwordConfig = {
    required: true,
    validate: {
      minLength: (value) => {
        return value.length >= 6 || "Minimalno 6 znakova!";
      },
    },
  };

  const passwordConfirmConfig = {
    required: true,
    validate: {
      matchesPreviousPassword: (value) => {
        const { password } = getValues();
        return password === value || "Unesite istu lozinku!";
      },
    },
  };
  // end of configs

  const onSubmit = (data) => {
    const { email, password } = data;

    signup(email, password);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <label className="label" htmlFor="emailRegister">
        Email adresa:
      </label>
      <div>
        <input name="email" id="emailRegister" ref={register(emailConfig)} />
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}
      </div>
      <label className="label" htmlFor="passwordRegister">
        Lozinka:
      </label>
      <div>
        <input
          type="password"
          id="passwordRegister"
          name="password"
          ref={register(passwordConfig)}
        />
        {errors.password && (
          <p className="error-message">{errors.password.message}</p>
        )}
      </div>
      <label className="label" htmlFor="passwordConfirm">
        Potvrdi lozinku:
      </label>
      <div>
        <input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          ref={register(passwordConfirmConfig)}
        />
        {errors.passwordConfirm && (
          <p className="error-message">{errors.passwordConfirm.message}</p>
        )}
      </div>
      <ButtonPrimary color="dark">Registruj se</ButtonPrimary>
    </form>
  );
};

export default RegisterForm;
