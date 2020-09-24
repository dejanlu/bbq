import React from "react";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";

import ButtonPrimary from "../button/ButtonPrimary";

const LoginForm = ({ login }) => {
  const { register, handleSubmit, errors } = useForm();

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
  // end of configs

  const onSubmit = (data) => {
    const { email, password } = data;

    login(email, password);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <label className="label" htmlFor="emailLogin">
        Email adresa:
      </label>
      <div>
        <input name="email" id="emailLogin" ref={register(emailConfig)} />
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}
      </div>
      <label className="label" htmlFor="passwordLogin">
        Lozinka:
      </label>
      <div>
        <input
          type="password"
          id="passwordLogin"
          name="password"
          ref={register(passwordConfig)}
        />
        {errors.password && (
          <p className="error-message">{errors.password.message}</p>
        )}
      </div>
      <ButtonPrimary>Prijavi se</ButtonPrimary>
    </form>
  );
};

export default LoginForm;
