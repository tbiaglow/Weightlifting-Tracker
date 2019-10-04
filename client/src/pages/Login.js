import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Redirect } from 'react-router';

class Login extends Component {
    state = {
        allData: [],
        userName: "",
        password: "",
        id: "",
        redirect: false
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    
    //Strategy: Get all user data when user clicks login =>
    //Loop through user data to see if any of the users have a username/password combo that matches those entered by user
    //=> If there is a match, set that user's id equal to this.state.id, then use the id value to redirect the page
    handleFormSubmit = event => {
      event.preventDefault();
      // If statement ensures user has entered both a username and password
      if (this.state.userName && this.state.password) {
        //Get all users, then set this.state equal to the resulting object
        API.getUsers()
          .then(res => {
              this.setState({ allData: res.data })
              var i;
              // For loop checks if there is a match between the username/password entered by the user and those in the database
              for (i = 0; i< this.state.allData.length; i++) {
                  if (this.state.allData[i].name === this.state.userName && this.state.allData[i].password === this.state.password) {
                      //If there is a match, set this.state.id equal to the id in the database
                      this.setState({id: this.state.allData[i].id})
                      console.log(this.state.id)
                      //Set state to redirect page
                      this.setState({redirect: true});
                  }
              }
          })
          .catch(err => console.log(err));
        }
    };

    render() {
        //Redirect page to user hub for the new user based on their id
        if (this.state.redirect) {
          return <Redirect push to={"/users/" + this.state.id} />;
        }
        return(
        <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Enter your username and password</h1>
            </Jumbotron>
            <form>
              <Input name="userName" value={this.state.userName} onChange={this.handleInputChange} placeholder="User Name (required)" />
              <Input name="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Password (required)" />
              <FormBtn
                disabled={!(this.state.userName && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Login
              </FormBtn>
            </form>
            <br></br>
            <div>Don't have an account?</div>
            <button><Link to={"/createaccount"}>Create Account</Link></button>
            </Col>
        </Row>
        </Container>
        )
    }
}

export default Login;