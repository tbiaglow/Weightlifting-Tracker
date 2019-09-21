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
    RPE: ""
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
      newHistoryItem = {
        year: this.state.year,
        month: this.state.month,
        day: this.state.day
      }
      newHistoryItem.sets = {
        sets: this.state.sets
      }
      newHistoryItem.workPerSet = {
        reps: this.state.reps,
        weight: this.state.weight,
        RPE: this.state.RPE
      }
      console.log(newHistoryItem)
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
