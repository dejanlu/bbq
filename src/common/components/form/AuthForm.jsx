import React from "react";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";

import ButtonPrimary from "../button/ButtonPrimary";

const emailConfig = {
  required: true,
  validate: (input) => isEmail(input),
};

const passwordConfig = {
  required: true,
  minLength: 6,
};

const AuthForm = ({ type, action }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <label className="label" htmlFor="email">
        Email adresa:
      </label>
      <input name="email" id="email" ref={register(emailConfig)} />
      <label className="label" htmlFor="password">
        Lozinka:
      </label>
      <input
        type="password"
        id="password"
        name="password"
        ref={register(passwordConfig)}
      />
      <ButtonPrimary>Prijavi se</ButtonPrimary>
    </form>
  );
};

export default AuthForm;
