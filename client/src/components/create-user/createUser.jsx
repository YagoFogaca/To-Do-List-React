import { useState } from "react";
import { ButtonOnclick } from "../btn/btn-onClick/btn-onClick";
import { ButtonSubmit } from "../btn/btn-submit/btn-submit";
import { UserApi } from "../../utils/api/userApi";
import "./createUser.css";

export function FormCreate({ formChange }) {
  const [avatar, setAvatar] = useState("./img/user-picture/7.png");

  async function createInput(event) {
    try {
      event.preventDefault();
      const user = {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
        image: avatar,
      };
      await UserApi.createUser(user);
      formChange();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <form className="form-initial" onSubmit={createInput}>
      <figure className="figure-avatar">
        <img className="img-avatar" src={avatar} alt="avatar" />
      </figure>

      <label htmlFor="name">Nome:</label>
      <input required id="name" name="name" type="text" placeholder="Seu nome..." />
      <label htmlFor="email">Email:</label>
      <input required id="email" name="email" type="email" placeholder="Seu email..." />
      <label htmlFor="password">Senha:</label>
      <input required id="password" type="password" placeholder="shhhh..." />
      <label>Image:</label>
      <select
        className="select-avatar"
        onChange={(event) => {
          setAvatar(event.target.value);
        }}
      >
        <option value="./img/user-picture/7.png"></option>
        <option value="./img/user-picture/1.png">Avatar - 1</option>
        <option value="./img/user-picture/2.png">Avatar - 2</option>
        <option value="./img/user-picture/3.png">Avatar - 3</option>
        <option value="./img/user-picture/4.png">Avatar - 4</option>
        <option value="./img/user-picture/5.png">Avatar - 5</option>
        <option value="./img/user-picture/6.png">Avatar - 6</option>
        <option value="./img/user-picture/7.png">Avatar - 7</option>
      </select>
      <div id="btn-section">
        <ButtonSubmit text={"Registar"} size={"30%"} color={"#55ff55"} />
        <ButtonOnclick functionBtn={formChange} text={"Login"} size={"30%"} color={"#f66b0e"} />
      </div>
    </form>
  );
}
