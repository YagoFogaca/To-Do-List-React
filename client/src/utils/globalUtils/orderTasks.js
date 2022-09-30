export function orderTasks(tasks) {
  tasks.sort(function (a, b) {
    if (+a.hour.replace(":", "") > +b.hour.replace(":", "")) return 1;
    if (+a.hour.replace(":", "") < +b.hour.replace(":", "")) return -1;
    if (+a.hour.replace(":", "") === +b.hour.replace(":", "")) return 0;
    return tasks;
  });

  return tasks;
}
