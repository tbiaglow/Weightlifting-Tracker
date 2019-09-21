import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Login extends Component {
    state = {
        allData: [],
        userName: "",
        password: "",
        id: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.userName && this.state.password) {
          API.getUsers()
            .then(res => {
                this.setState({ allData: res.data })
                var i;
                for (i = 0; i< this.state.allData.length; i++) {
                    if (this.state.allData[i].name === this.state.userName && this.state.allData[i].password === this.state.password) {
                        this.setState({id: this.state.allData[i].id})
                        console.log(this.state.id)
                        window.location.href = "http://localhost:3000/users/" + this.state.id;
                    }
                }
            })
            .catch(err => console.log(err));
        }
    };

    render() {
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