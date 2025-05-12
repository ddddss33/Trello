import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Вход выполнен:", data);
    localStorage.setItem("user", JSON.stringify({ email: data.email }));
    navigate("/");
  };

  return (
    <StyledContainer>
      <Logo>Trello</Logo>
      <Title>Вход в Trello</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="Введите email"
          type="email"
          margin="normal"
          {...register("email", {
            required: "Email обязателен",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Некорректный email",
            },
          })}
          error={Boolean(errors.email)}
          helperText={errors.email ? errors.email.message : ""}
        />

        <TextField
          fullWidth
          label="Введите пароль"
          type="password"
          margin="normal"
          {...register("password", {
            required: "Пароль обязателен",
            minLength: {
              value: 6,
              message: "Пароль должен быть не менее 6 символов",
            },
          })}
          error={Boolean(errors.password)}
          helperText={errors.password ? errors.password.message : ""}
        />

        <StyledButton type="submit" variant="contained">
          Продолжить
        </StyledButton>
      </form>
      <StyledText>
        <Link to="/signup">Зарегистрировать аккаунт</Link>
      </StyledText>
    </StyledContainer>
  );
};

export default SignIn;

const StyledContainer = styled(Container)(({ theme }) => ({
  "&.MuiContainer-root": {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    textAlign: "center",
    background: theme.palette.background.paper,
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
  },
}));

const Logo = styled(Typography)(({ theme }) => ({
  color: "#0079bf",
  fontSize: "36px",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "22px",
  color: theme.palette.text.primary, // Использовать цвет из темы
  marginBottom: "20px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: "100%",
  marginTop: "10px",
}));

const StyledText = styled(Typography)(({ theme }) => ({
  marginTop: "15px",
  fontSize: "14px",
  color: theme.palette.text.secondary, // Использовать цвет из темы
}));
