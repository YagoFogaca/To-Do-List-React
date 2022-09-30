import { useState } from "react";
import { UserApi } from "../../utils/api/userApi";
import { useNavigate } from "react-router-dom";
import { FormMessage } from "../formMessage/formMessage";
import { ButtonOnclick } from "../btn/btn-onClick/btn-onClick";
import { ButtonSubmit } from "../btn/btn-submit/btn-submit";

import "./login.css";
export function FormLogin({ functionBtn }) {
  const [login, setLogin] = useState(false);
  let navigate = useNavigate();

  async function loginInputs(event) {
    try {
      event.preventDefault();
      const user = {
        email: event.target.email.value,
        password: event.target.password.value,
      };
      const userApi = await UserApi.login(user);
      localStorage.setItem("user", userApi.user.id);
      localStorage.setItem("token", userApi.jwtToken);
      navigate("/home");
    } catch (e) {
      console.log(e);
      setLogin(true);
    }
  }

  return (
    <>
      <form className="form-initial" onSubmit={loginInputs}>
        {login ? <FormMessage message={"Email ou senha incorreto"} nameClass={"loginDenied"} /> : <></>}
        <label htmlFor="email">Email:</label>
        <input required id="email" type="email" name="email" placeholder="teste@gmail.com" />
        <label htmlFor="password">Senha:</label>
        <input required id="password" type="password" name="password" placeholder="sua senha..." />
        <div id="section-btn">
          <ButtonSubmit text={"Login"} size={"30%"} color={"#55ff55"} />
          <ButtonOnclick functionBtn={functionBtn} text={"Cadastro"} size={"30%"} color={"#f66b0e"} />
        </div>
      </form>
    </>
  );
}
