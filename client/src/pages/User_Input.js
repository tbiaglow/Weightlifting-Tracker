import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
// import { Dropdown } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
// import {Select} from "react-dropdown-select";
// import {Dropdown} from 'react-dropdown'

class User_Input extends Component {
  state = {
    year: "",
    month: "",
    day: "",
    lift: "squat",
    sets: "",
    reps: "",
    weight: "",
    RPE: "",
    userData: []
  };
  // options = [{value: "squat", label: "squat"}, {value: "press", label: "press"}, {value: "deadlift", label: "deadlift"}];
  // defaultOption = this.options[0]

  // componentDidMount() {
  //   this.loadUsers();

  // }

  // loadUsers = () => {
  //   API.getUsers()
  //     .then(res => {
  //       this.setState({ users: res.data })
  //       console.log(res.data)
  //     })
  //     .catch(err => console.log(err));
  // };

  handleLiftButton = (lift) => {
    this.state.lift = lift
    console.log(this.state.lift)
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getUser(this.props.match.params.id)
    .then(res => {
      console.log(res.data)
      var newHistoryItem;
      newHistoryItem = {
        year: parseInt(this.state.year),
        month: parseInt(this.state.month),
        day: parseInt(this.state.day),
        sets: [{
          sets: parseInt(this.state.sets),
          workPerSet: [{
            reps: parseInt(this.state.reps),
            weight: parseInt(this.state.weight),
            RPE: parseInt(this.state.RPE)
          }]
        }]
      }

      console.log(newHistoryItem)

      // Switch statement depending on value of this.state.lift should go here
      res.data[0].squat[0].history.push(newHistoryItem)
      console.log(res.data)
      this.state.userData = res.data

    })
    console.log(this.props.match.params.id)
    API.deleteUser(this.props.match.params.id)
    .then(() => {
      console.log(this.state.userData)
      API.saveUser(this.state.userData)
    })
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Enter your most recent session</h1>
            </Jumbotron>
            <form>
              <Input name="year" value={this.state.year} onChange={this.handleInputChange} placeholder="Year (required)" />
              <Input name="month" value={this.state.month} onChange={this.handleInputChange} placeholder="Month (required)" />
              <Input name="day" value={this.state.day} onChange={this.handleInputChange} placeholder="Day of the month (required)" />
              {/* <Input name="squat" placeholder="Squat" /> */}
              {/* <Input name="press" placeholder="Press" />
              <Input name="deadlift" placeholder="Deadlift" /> */}
              <h2>Select Lift: </h2>
              <button name="squatbutton" onClick={() => this.handleLiftButton("squat")}>Squat</button>
              <button name="pressbutton" onClick={() => this.handleLiftButton("press")}>Press</button>
              {/* <Select options={this.options} onChange={(values) => this.setValues(values)} /> */}
              {/* <Dropdown options={this.options} onChange={this._onSelect} value={this.defaultOption} placeholder="Select an option" /> */}
              <h2>Enter {this.state.lift} Volume:</h2>
              <Input name="sets" value={this.state.sets} onChange={this.handleInputChange} placeholder="sets" />
              <Input name="reps" value={this.state.reps} onChange={this.handleInputChange} placeholder="reps" />
              <Input name="weight" value={this.state.weight} onChange={this.handleInputChange} placeholder="weight" />
              <Input name="RPE" value={this.state.RPE} onChange={this.handleInputChange} placeholder="RPE" />
              <FormBtn
                disabled={!(this.state.sets && this.state.reps && this.state.weight)}
                onClick={this.handleFormSubmit}
              >Submit session</FormBtn>
            </form>
            <button><Link to={"/users/" + this.props.match.params.id}>View History</Link></button>
            <button><Link to={"/"}>Logout</Link></button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default User_Input;
