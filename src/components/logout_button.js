import React from "react";
import Firebase from "../firebase";
import { withRouter } from "react-router-dom";

function LogoutButton(props) {
  return (
    <button className="ready" onClick={logout}>
      Salir
    </button>
  );

  async function logout() {
    try {
      await Firebase.logout();
      props.history.replace("/");
    } catch (error) {
      alert(error.message);
    }
  }
}

export default withRouter(LogoutButton);
