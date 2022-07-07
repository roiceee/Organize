import localStorageController from "./localStorageModule.js";
import createProject from "./Project.js";

function convertProjectJSON() {
    //returns an array of project objects
    let projects = JSON.parse(localStorageController.getData());
    
    for (let i = 0; i < projects.length; i++) {
        const projectObject = createProject(projects[i].index, projects[i].name);
        projectObject.setTasks(projects[i].tasks);
        projects[i] = projectObject;
    }
    return projects;
}

export default (function ProjectHolder(){
    let projects;
    let currentProject;
    let isOnProject = false;
    localStorageController.getData() === null ? projects = [] : projects = convertProjectJSON();
    const addProject = function(project) {
        projects.push(project);
    }
    const deleteProject = function(index) {
        projects.splice(index,1);
    }
    const getLength = function() {
        return projects.length;
    }
    const getProjects = function() {
        return projects;
    }
    const setCurrentProject = function(projectIndex) {
        currentProject = projects[projectIndex];
    }
    const getCurrentProjectLength = function() {
        return currentProject.getLength();
    }
    const addTaskToCurrentProject = function(task) {
        currentProject.addTask(task);
    }
    const getCurrentProject = function() {
        return currentProject;
    }
    const getCurrentProjectTask = function (index) {
        return currentProject.getTask(index);
    }
    const deleteCurrentProjectTask = function (index) {
        currentProject.deleteTask(index);
    }
    return {
        addProject,
        deleteProject,
        getLength,
        getProjects,
        setCurrentProject,
        getCurrentProjectLength,
        addTaskToCurrentProject,
        getCurrentProject,
        getCurrentProjectTask,
        deleteCurrentProjectTask,
        isOnProject,
    }
})();