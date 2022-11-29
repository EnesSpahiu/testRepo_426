import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { useState } from "react";
import AuthenticationService from "../service/AuthenticationService";
import * as Yup from "yup";
import { useAuth } from "../context/AuthenticationContext";
import { message } from "antd";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        CarDealer24
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {
  const navigate = useNavigate();
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { login } = useAuth();

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("Please enter a first name")
      .max(255, "The first name can't be longer than 255 characters"),
    lastName: Yup.string()
      .required("Please enter a last name")
      .max(255, "The last name can't be longer than 255 characters"),
    username: Yup.string()
      .required("Please enter a username")
      .max(255, "The username can't be longer than 255 characters"),
    password: Yup.string()
      .required("Please enter a password")
      .max(255, "The password can't be longer than 255 characters"),
  });

  return (
    <Formik
      validateOnChange={hasSubmitted}
      initialValues={{
        firstName: "",
        lastName: "",
        username: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, helpers) => {
        console.log(values);

        AuthenticationService()
          .signup({ ...values })
          .then(() => {
            login(values.username, values.password).then(() => {
              navigate("/home");
              helpers.setSubmitting(false);
            });
          })
          .catch((error) => {
            message.error(error.response.data);
            helpers.setSubmitting(false);
          });
      }}
    >
      {({ isSubmitting, submitForm, handleChange, values }) => (
        <Form>
          <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: "100vh" }}>
              <CssBaseline />
              <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                  backgroundImage: "url(https://source.unsplash.com/random)",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: (t) =>
                    t.palette.mode === "light"
                      ? t.palette.grey[50]
                      : t.palette.grey[900],
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
              >
                <Box
                  sx={{
                    my: 8,
                    mx: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Register
                  </Typography>
                  <TextField
                    onChange={handleChange}
                    margin="normal"
                    required
                    fullWidth
                    value={values.firstName}
                    id="firstname"
                    label="Firstname"
                    name="firstName"
                    autoComplete="firstName"
                    autoFocus
                  />
                  <TextField
                    onChange={handleChange}
                    margin="normal"
                    required
                    fullWidth
                    value={values.lastName}
                    id="lastname"
                    label="Lastname"
                    name="lastName"
                    autoComplete="lastname"
                  />
                  <TextField
                    onChange={handleChange}
                    margin="normal"
                    required
                    fullWidth
                    value={values.username}
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                  />
                  <TextField
                    onChange={handleChange}
                    margin="normal"
                    required
                    fullWidth
                    value={values.password}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={isSubmitting}
                    onClick={() => {
                      setHasSubmitted(true);
                      submitForm();
                    }}
                  >
                    Register
                  </Button>
                  <Copyright sx={{ mt: 5 }} />
                </Box>
              </Grid>
            </Grid>
          </ThemeProvider>
        </Form>
      )}
    </Formik>
  );
}
