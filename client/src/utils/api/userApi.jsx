const urlApi = "https://task-planning-api.herokuapp.com/user/";

export class UserApi {
  static async login(user) {
    const userLogin = await fetch(urlApi + "login-user", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(user),
    });

    return await userLogin.json();
  }

  static async createUser(user) {
    const userCreated = await fetch(urlApi + "create-user", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(user),
    });

    console.log(userCreated);

    return userCreated.json();
  }
}
