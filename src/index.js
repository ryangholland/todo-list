const Task = (title, description, dueDate, priority) => {
  let completed = false;

  const completeTask = () => {
    completed = !completed;
  };

  const displayProps = () => {
    console.log({ title, description, dueDate, priority, completed });
  };

  return { displayProps, completeTask };
};

const Project = (title) => {
  let tasks = [];

  const addTask = (task) => {
    tasks.push(task);
  };

  const displayTasks = () => {
    tasks.forEach((task) => {
      task.displayProps();
    });
  };

  return { addTask, displayTasks };
};

const dataController = (() => {
  const projects = [];

  const createProject = (title) => {
    let newProject = Project(title);
    projects.push(newProject);
  };

  const loadProjects = () => {
    // Get projects from LOCALSTORAGE if available; if not, create a default project

    let defaultTask = Task("Default Task", "A default task.", "Tomorrow", "High");
    let defaultProject = Project("Default Project");
    defaultProject.addTask(defaultTask);
    defaultProject.displayTasks();
  }

  loadProjects();

  return { createProject };
})();

const inputController = (() => {})();

const displayController = (() => {})();


