import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, TextField } from "@mui/material";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Регистрация выполнена:", data);
    localStorage.setItem(
      "user",
      JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      })
    );
    navigate("/");
  };

  return (
    <Container>
      <Logo>Trello</Logo>
      <Title>Зарегистрироваться в Trello</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="FirstName"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("firstName", { required: "Имя обязательно" })}
          error={!!errors.firstName}
          helperText={errors.firstName ? errors.firstName.message : ""}
        />

        <TextField
          label="SurName"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("lastName", { required: "Фамилия обязательна" })}
          error={!!errors.lastName}
          helperText={errors.lastName ? errors.lastName.message : ""}
        />

        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("email", {
            required: "Email обязателен",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Некорректный email",
            },
          })}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ""}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("password", {
            required: "Пароль обязателен",
            minLength: {
              value: 6,
              message: "Пароль должен быть не менее 6 символов",
            },
          })}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ""}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Продолжить
        </Button>
      </form>
      <Text>
        У вас есть аккаунт? <StyledLink to="/signin">Войти</StyledLink>
      </Text>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  text-align: center;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  color: #0079bf;
  font-size: 36px;
`;

const Title = styled.h2`
  font-size: 22px;
  color: #444;
  margin-bottom: 20px;
`;

const Text = styled.p`
  margin-top: 15px;
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  color: #0079bf;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

// export default SignUp;
