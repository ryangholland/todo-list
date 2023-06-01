import uniqid from "uniqid";

const Project = (title) => {
  let id = uniqid();
  let tasks = [];

  return { title, id, tasks };
};

export { Project };
