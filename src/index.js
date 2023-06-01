import uniqid from "uniqid";
import "./style.css";

const Task = (title, description, dueDate, priority) => {
  let id = uniqid();
  let completed = false;
  let expanded = false;

  return { title, id, description, dueDate, priority, completed, expanded };
};

const Project = (title) => {
  let id = uniqid();
  let tasks = [];

  return { title, id, tasks };
};

const dataController = (() => {
  let projects = [];
  let activeProject = null;

  const getProjects = () => projects;
  const getActiveProject = () => activeProject;

  const createProject = (title) => {
    let newProject = Project(title);
    projects.push(newProject);
    saveData();
  };

  const setActiveProject = (id) => {
    projects.forEach((project) => {
      if (project.id === id) activeProject = project;
    });
    displayController.renderAll();
  };

  const createTask = (title, description, dueDate, priority) => {
    let newTask = Task(title, description, dueDate, priority);
    activeProject.tasks.push(newTask);
    saveData();
  };

  const loadProjects = () => {
    // Get projects from LOCALSTORAGE if available; if not, create a default project
    if (localStorage.getItem("projectData")) {
      projects = JSON.parse(localStorage.getItem("projectData"));
      activeProject = projects[0];
    } else {
      createProject("Default Project");
      activeProject = projects[0];
      createTask("Task One", "The first task", "Tomorrow", "High");
      createTask("Task Two", "Another task", "Next Week", "Medium");
    }
  };

  const deleteProject = (id) => {
    if (projects.length === 1) return;
    projects = projects.filter((project) => project.id != id);
    if (!projects.includes(activeProject)) activeProject = projects[0];
    displayController.renderAll();
    saveData();
  };

  const deleteTask = (id) => {
    let activeTasks = activeProject.tasks;
    activeProject.tasks = activeTasks.filter((task) => task.id != id);
    displayController.renderTasks();
    saveData();
  };

  const getTaskDetails = (id) => {
    let tasks = activeProject.tasks;
    let taskDetails = [];
    tasks.forEach((task) => {
      if (task.id === id) taskDetails = task;
    });
    return taskDetails;
  };

  const saveData = () => {
    localStorage.setItem("projectData", JSON.stringify(projects));
  };

  loadProjects();

  return {
    getProjects,
    getActiveProject,
    createProject,
    setActiveProject,
    createTask,
    deleteProject,
    deleteTask,
    getTaskDetails,
  };
})();

const inputController = (() => {
  const addProjectInput = document.querySelector("[data-new-project-input]");
  const addProjectBtn = document.querySelector("[data-new-project-btn]");

  const taskTitleInput = document.querySelector("[data-task-title-input]");
  const taskDescriptionInput = document.querySelector(
    "[data-task-description-input]"
  );
  const taskDateInput = document.querySelector("[data-task-date-input]");
  const taskPrioritySelect = document.querySelector(
    "[data-task-priority-select]"
  );
  const addTaskBtn = document.querySelector("[data-new-task-btn]");

  addProjectBtn.addEventListener("click", () => {
    if (addProjectInput.value === "") return;
    dataController.createProject(addProjectInput.value);
    addProjectInput.value = "";
    displayController.renderProjectList();
  });

  addTaskBtn.addEventListener("click", () => {
    if (taskTitleInput.value === "") return;
    dataController.createTask(
      taskTitleInput.value,
      taskDescriptionInput.value,
      taskDateInput.value,
      taskPrioritySelect.value
    );
    taskTitleInput.value = "";
    taskDescriptionInput.value = "";
    taskDateInput.value = "";
    taskPrioritySelect.value = "Low";
    displayController.renderTasks();
  });

  document.addEventListener("click", (e) => {
    // Delete Project Buttons
    if (e.target.dataset.deleteProjectId)
      dataController.deleteProject(e.target.dataset.deleteProjectId);

    // Delete Task Buttons
    if (e.target.dataset.deleteTaskId)
      dataController.deleteTask(e.target.dataset.deleteTaskId);

    // Change Active Project
    if (e.target.dataset.activeProjectId) {
      dataController.setActiveProject(e.target.dataset.activeProjectId);
    }

    // Expand Task Buttons
    if (e.target.dataset.expandTaskId) {
      let taskDiv = e.target.parentNode.parentNode;
      if (taskDiv.childElementCount === 1) {
        displayController.expandTask(taskDiv);
      } else {
        displayController.collapseTask(taskDiv);
      }
    }
  });
})();

const displayController = (() => {
  const clearElement = (element) => {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  };

  const renderProjectList = () => {
    const projectListDiv = document.getElementById("project-list");
    let projects = dataController.getProjects();
    clearElement(projectListDiv);
    projects.forEach((project) => {
      let newDiv = document.createElement("div");
      let titleDiv = document.createElement("div");
      let deleteBtn = document.createElement("button");

      titleDiv.textContent = project.title;
      titleDiv.dataset.activeProjectId = project.id;
      deleteBtn.textContent = "X";
      deleteBtn.dataset.deleteProjectId = project.id;

      titleDiv.classList.add("project-link");
      newDiv.classList.add("project-item");

      newDiv.append(titleDiv);
      newDiv.append(deleteBtn);

      projectListDiv.append(newDiv);
    });
  };

  const renderActiveProject = () => {
    const activeProject = dataController.getActiveProject();
    const activeProjectSpan = document.querySelector(
      "[data-active-project-title]"
    );
    activeProjectSpan.textContent = activeProject.title;
  };

  const renderTasks = () => {
    const activeProject = dataController.getActiveProject();
    const activeTasks = activeProject.tasks;
    const taskListDiv = document.getElementById("task-list");
    clearElement(taskListDiv);
    activeTasks.forEach((task) => {
      let newDiv = document.createElement("div");
      newDiv.dataset.taskDivId = task.id;

      let headlineDiv = document.createElement("div");
      headlineDiv.classList.add("headline");

      let expandBtn = document.createElement("button");
      let titleDiv = document.createElement("div");
      let deleteBtn = document.createElement("button");
      expandBtn.dataset.expandTaskId = task.id;
      deleteBtn.dataset.deleteTaskId = task.id;

      expandBtn.textContent = "...";
      titleDiv.textContent = task.title;
      deleteBtn.textContent = "X";

      headlineDiv.append(expandBtn);
      headlineDiv.append(titleDiv);
      headlineDiv.append(deleteBtn);
      newDiv.append(headlineDiv);

      taskListDiv.append(newDiv);

      if (task.expanded) expandTask(newDiv);
    });
  };

  const renderAll = () => {
    renderProjectList();
    renderActiveProject();
    renderTasks();
  };

  const expandTask = (div) => {
    let taskDetails = dataController.getTaskDetails(div.dataset.taskDivId);
    taskDetails.expanded = true;

    const detailsBr = document.createElement("br");
    const descriptionDiv = document.createElement("div");
    descriptionDiv.textContent = `Description: ${taskDetails.description}`;
    const dueDateDiv = document.createElement("div");
    dueDateDiv.textContent = `Due Date: ${taskDetails.dueDate}`;
    const priorityDiv = document.createElement("div");
    priorityDiv.textContent = `Priority: ${taskDetails.priority}`;

    div.append(detailsBr);
    div.append(descriptionDiv);
    div.append(dueDateDiv);
    div.append(priorityDiv);
  };

  const collapseTask = (div) => {
    let taskDetails = dataController.getTaskDetails(div.dataset.taskDivId);
    taskDetails.expanded = false;
    clearElement(div);
    renderTasks();
  };

  renderAll();

  return {
    renderProjectList,
    renderActiveProject,
    renderTasks,
    renderAll,
    expandTask,
    collapseTask,
  };
})();
