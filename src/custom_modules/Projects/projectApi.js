import api from 'utils/api';

const reqData = {
    method: 'GET',
    url: '',
    queryParams: {},
    formData: {},
    bodyParams: {},
    pathParams: [],
    data:{}
};

export function getList(url, method, details) {
    let listDetails = { ...reqData };
    listDetails.url = url
    listDetails.method = method;
    listDetails.data = details;
    return api(listDetails)
        .then(response => response)
}

export function addProject(url, method, details) {
    let projectDetails = { ...reqData };
    projectDetails.url = url
    projectDetails.method = method;
    projectDetails.data = details;
    return api(projectDetails)
        .then(response => response)
}

export function updateProject(url, method, details) {
    let projectDetails = { ...reqData };
    projectDetails.url = url
    projectDetails.method = method;
    projectDetails.data = details;
    return api(projectDetails)
        .then(response => response)
}

export function getProjectById(url, method, details) {
    let projectDetails = { ...reqData };
    projectDetails.url = url
    projectDetails.method = method;
    projectDetails.data = details;
    return api(projectDetails)
        .then(response => response)
}

export function updateProjectStatus(url, method, details) {
    let projectDetails = { ...reqData };
    projectDetails.url = url
    projectDetails.method = method;
    projectDetails.data = details;
    return api(projectDetails)
        .then(response => response)
}

export function setProjectmanager(url, method, details) {
    let projectDetails = { ...reqData };
    projectDetails.url = url
    projectDetails.method = method;
    projectDetails.data = details;
    return api(projectDetails)
        .then(response => response)
}



