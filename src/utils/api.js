import axios from 'axios';

//clients api
const clientBaseURL = 'http://104.248.151.204:8100/api';
// create client post 
export const createClient = '/organization_list/';

//clients list
export const clientsList = (id) => axios.get(`${clientBaseURL}/clients/${id}`);

//searct clients
export const searchClient = (id) => axios.get(`${clientBaseURL}/clients/${id}`);

//clients detailes
export const clientDetail = (id) => axios.get(`${clientBaseURL}/client/${id}`);

//client edit
export const clientEdit = (id, payload) => axios.put(`${clientBaseURL}/client/${id}`, payload);

//archive unarchive
export const archiveUnAchinveClient = (id, payload) => axios.patch(`${clientBaseURL}/client/${id}`, payload);


// organization
const baseURLOrganization = 'http://104.248.151.204:81000/api';

//get organization type list
export const getOganizationType = (id) => axios.get(`${baseURLOrganization}/organization_types/${id}`);


//get organization list
export const getOganization = (id) => axios.get(`${baseURLOrganization}/organization_list/${id}`);

//create an organization
export const createOrganization = (payload) => axios.post(`${baseURLOrganization}/organization/`, payload);

//organization details
export const organizationDetail = (id) => axios.get(`${baseURLOrganization}/organization/${id}`);

//organization update
export const updateOrganization = (id, payload) => axios.put(`${baseURLOrganization}/organization/${id}`, payload);

//organization archive unarchive
export const archiveUnAchinveOrganization = (id, payload) => axios.patch(`${baseURLOrganization}/organization/${id}`, payload);


const token = localStorage.getItem('access_token');

console.log(token)

//add the following lines to any file where you import axios
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;

// The url derived from our .env file
//.env varible need to set in project root folder
// need to convert to string

const URL = `${process.env.REACT_APP_API_URL}/api/`.toString();
console.log("env`", process.env)

function makeHeaders() {
    const headers = {
        'Content-Type': 'application/json',
    };
    return headers;
}
/*eslint-disable */
function makeHeaderWithToken() {
    const headers = {
        'Authorization': `${"Bearer" + " "}${token}`,
        'Content-Type': 'application/json',
    };
    return headers;
}

const api = axios.create({ baseURL: URL, headers: token ? makeHeaderWithToken() : makeHeaders(), });

export default api;




