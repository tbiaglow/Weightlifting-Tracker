import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class CreateAccount extends Component {
    state = {
        allData: [],
        userName: "",
        password: "",
        okayToProceed: true
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    //Strategy: Make sure user has actually entered a username and password, don't run the function if they haven't =>
    //Create unique ids by always making the id equal to the current length of the Users database plus one =>
    //Loop through the data to make sure the entered username is unique, use a variable that we set equal to either 
    //true or false to confirm or deny the new username => Save new user and redirect page to new user hub
    handleFormSubmit = event => {
        event.preventDefault();
        // Check to make sure user has actually entered a username and password
        if (this.state.userName && this.state.password) {
          API.getUsers()
            .then(res => {
                //Create a UNIQUE id by setting this.state.id equal to the total length of the userdata plus one
                this.setState({ id: res.data.length + 1 })
                var i;
                //Loop through the data to make sure the entered username is unique
                for (i = 0; i < res.data.length; i++) {
                    if (res.data[i].name === this.state.userName) {
                        alert("Username already exists!")
                        //Set this.state.okayToProceed = false to stop the function
                        this.setState({okayToProceed: false})
                        return this.state.okayToProceed
                    }
                }
            }).then(() => {
                //Don't save the new user unless the username does not already exist in database
                if (this.state.okayToProceed === true) {
                //Save new user according to model schema
                API.saveUser({
                    id: this.state.id,
                    name: this.state.userName,
                    password: this.state.password,
                    Squat: [],
                    Deadlift: [],
                    Press: [],
                    Bench_Press: [],
                    Power_Clean: []
                })
                //Redirect page to user hub for the new user based on their id
                window.location.href = "http://localhost:3000/users/" + this.state.id
                } else {
                    //reset this.state.okayToProceed if user failed the check above, so they can enter a new username
                    //If we don't reset this value, the user will always fail the check after the first failed attempt
                    this.setState({okayToProceed: true})
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
                        <h1>Please enter a username and password</h1>
                        </Jumbotron>
                        <form>
                        <Input name="userName" value={this.state.userName} onChange={this.handleInputChange} placeholder="User Name (required)" />
                        <Input name="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Password (required)" />
                        <FormBtn
                            disabled={!(this.state.userName && this.state.password)}
                            onClick={this.handleFormSubmit}
                        >
                            Create Account
                        </FormBtn>
                        </form>
                        <br></br>
                        <div>Already have an account?</div>
                        <button><Link to={"/"}>Login</Link></button>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default CreateAccount