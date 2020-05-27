import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Firebase from "../../firebase";
import logo from "../../images/login.png";
import "./login.css";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="container">
      <img alt="" src={logo}></img>
      <form className="formLogin" onSubmit={e => e.preventDefault() && false}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Usuario</InputLabel>
          <Input
            id="email"
            name="email"
            autoComplete="off"
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Contraseña</InputLabel>
          <Input
            name="password"
            type="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormControl>
        <Button type="submit" fullWidth onClick={login}>
          Entrar
        </Button>
      </form>
    </main>
  );

  async function login() {
    try {
      await Firebase.login(email, password);
      props.history.replace("/home");
    } catch (error) {
      alert(error.message);
    }
  }
}

export default withRouter(LoginForm);
