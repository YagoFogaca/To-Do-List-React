import { orderTasks } from "../globalUtils/orderTasks";
const urlApi = "https://task-planning-api.herokuapp.com/task/";

export class TaskAPI {
  static async getAllTasksUser(id_user) {
    const tasks = await fetch(urlApi + "get-tasks/" + id_user);
    const tasksOrder = await tasks.json();
    orderTasks(tasksOrder);

    return tasksOrder;
  }

  static async updateTask(task) {
    const taskUpdated = await fetch(urlApi + "update-task/" + task.id, {
      method: "PATCH",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(task),
    });

    return await taskUpdated.json();
  }

  static async deleteTask(taskId) {
    const deleteTask = await fetch(urlApi + "/delete-tasks/" + taskId, {
      method: "DELETE",
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    return await deleteTask.json();
  }

  static async createTask(task) {
    const taskCreate = await fetch(urlApi + "create-tasks", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(task),
    });

    return taskCreate.json();
  }
}
