import React, {Component} from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
//Parent Layouts
import AuthLayout from "layouts/Auth/Auth.jsx";
import AdminLayout from "layouts/Admin/Admin.jsx";
import axios from 'axios';

//add the following lines to any file where you import axios
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;



class App extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        // setInterval(() => {
        //     let token = sessionStorage.getItem('access_token');
        //     console.log('here', token);
        //     if(token){
        //         axios.post('http://localhost:8000/api/api-token-refresh/', {
        //             token: token,
        //           })
        //           .then(function (response) {
        //             console.log('new token', response);
        //             if(response.data){
        //                 sessionStorage.setItem('access_token', response.data.token)                        
        //             }
        //           })
        //           .catch(function (error) {
        //             console.log('error in getting token', error);
        //           });
        //     }   
        // }, 120000)
    }

    render(){
        return(
            <Switch>
                <Route path="/auth" render={props => <AuthLayout {...props} />} />
                <Route path="/admin" render={props => <AdminLayout {...props} />} />
                <Redirect from="/" to="/auth/login" />
            </Switch>
        )
    }
}

export default App;