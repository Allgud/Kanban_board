import { useAuthScreen } from "../../hooks/useAuthScreen";
import { Container, Typography, Stack, TextField, Button } from "@mui/material";
import Logo from "../../assets/logo.svg";


const AuthScreen = () => {
  const { isLogin, form, onLinkClick, handleChange, loading, handleAuth } =
    useAuthScreen();
  return (
    <Container
      maxWidth="xs"
      sx={{
        pt: 4,
      }}
    >
      <Stack alignItems="center" spacing={2}>
        <img src={Logo} alt="Oxy Group Logo" />
        <Typography color="rgba(255,255,255,.6)">Доска заданий</Typography>
      </Stack>
      <Stack spacing={1} mt={4}>
        <TextField
          value={form.email}
          name="email"
          label="Email"
          onChange={(evt) => handleChange(evt)}
        />
        <TextField
          type="password"
          value={form.password}
          name="password"
          label="Password"
          onChange={(evt) => handleChange(evt)}
        />
        <Button
          variant="contained"
          disabled={loading || !form.email || !form.password}
          onClick={() => handleAuth()}
        >
          {isLogin ? "Войти" : "Зарегистрироваться"}
        </Button>
      </Stack>
      <Typography
        onClick={() => onLinkClick()}
        sx={{ cursor: "pointer" }}
        color="rgba(255,255,255,.6)"
        textAlign="center"
        mt={2}
      >
        {isLogin
          ? "Нет аккаунта? Зарегистрироваться"
          : "У меня уже есть аккаунт"}
      </Typography>
    </Container>
  );
};

export default AuthScreen;