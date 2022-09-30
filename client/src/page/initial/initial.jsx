import { FormLogin } from "../../components/login/login";
import { FormCreate } from "../../components/create-user/createUser";
import { useState } from "react";
import "./initial.css";
export function Initial() {
  const [changeForm, setChangeForm] = useState(false);

  function formChange() {
    setChangeForm(!changeForm);
  }

  return (
    <section id="section-initial">
      <div id="card-forms">
        {changeForm ? <FormCreate formChange={formChange} /> : <FormLogin functionBtn={formChange} />}
      </div>
    </section>
  );
}
