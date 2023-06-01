import uniqid from "uniqid";

const Task = (title, description, dueDate, priority) => {
  let id = uniqid();
  let completed = false;
  let expanded = false;

  return { title, id, description, dueDate, priority, completed, expanded };
};

export { Task };
