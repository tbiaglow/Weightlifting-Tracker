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

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.userName && this.state.password) {
          API.getUsers()
            .then(res => {
                this.setState({ id: res.data.length + 1 })
                // this.setState({ allData: res.data })
                // console.log(this.state.allData)
                var i;
                
                for (i = 0; i < res.data.length; i++) {
                    if (res.data[i].name === this.state.userName) {
                        alert("Username already exists!")
                        this.setState({okayToProceed: false})
                        return this.state.okayToProceed
                        // window.location.href = "http://localhost:3000/createaccount"
                    }
                }
                // API.saveUser({
                //     id: this.state.id,
                //     name: this.state.userName,
                //     password: this.state.password,
                //     Squat: [],
                //     Deadlift: [],
                //     Press: [],
                //     Bench_Press: [],
                //     Power_Clean: []
                // })
                // window.location.href = "http://localhost:3000/users/" + this.state.id
                // .then(res => {window.location.href = "http://localhost:3000/users/" + res.id})
            }).then(() => {
                if (this.state.okayToProceed === true) {
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
                window.location.href = "http://localhost:3000/users/" + this.state.id
                } else {
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