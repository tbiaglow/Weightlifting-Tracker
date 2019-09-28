import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
// import {Select} from "react-dropdown-select";
// import {Dropdown} from 'react-dropdown'

class User_Input extends Component {
  // Need to assign keys for each variable in user history so I can set up the schema correctly
  state = {
    year: "",
    month: "",
    day: "",
    // this.state.lift should be switchable
    lift: "squat",
    sets: "",
    reps: "",
    weight: "",
    RPE: "",
    userData: []
  };

  // Functions to change desired lift
  //-----------------------------------------------------------------------------------------
  handleSquatButton = event => {
    event.preventDefault();
    this.setState({lift: "squat"})
    console.log(this.state.lift)
  }
  handlePressButton = event => {
    event.preventDefault();
    this.setState({lift: "press"})
    console.log(this.state.lift)
  }
  handleBenchPressButton = event => {
    event.preventDefault();
    this.setState({lift: "bench press"})
    console.log(this.state.lift)
  }
  handleDeadliftButton = event => {
    event.preventDefault();
    this.setState({lift: "deadlift"})
    console.log(this.state.lift)
  }
  //-----------------------------------------------------------------------------------------

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

   // Overall strategy: get user's history => create new variable equal to this.state, organized according to model schema 
  // => push this new variable into user's history => push new user history to database
  handleFormSubmit = event => {
    event.preventDefault();
       //Get the user whose id matches the id in the URL
    API.getUser(this.props.match.params.id)
    .then(res => {
      console.log(res.data)
       //Initialize new variable
       var newHistoryItem;
       //Set this new variable to an object with keys equal to the user input 
      newHistoryItem = {
        year: parseInt(this.state.year),
        month: parseInt(this.state.month),
        day: parseInt(this.state.day),
        //Set data following the schema laid out in models folder
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
      switch (this.state.lift) {
        case "squat": res.data[0].squat[0].history.push(newHistoryItem)
        break;
        case "press": res.data[0].press[0].history.push(newHistoryItem)
        break;
        case "bench press": res.data[0].bench_press[0].history.push(newHistoryItem)
        break;
        case "deadlift": res.data[0].deadlift[0].history.push(newHistoryItem)
        break;
      }
      
      console.log(res.data)
      //Set user's data equal to the new res.data to preserve it outside the function
      this.setState({userData: res.data[0]})

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
              <button name="squatbutton" onClick={this.handleSquatButton}>Squat</button>
              <button name="pressbutton" onClick={this.handlePressButton}>Press</button>
              <button name="benchpressbutton" onClick={this.handleBenchPressButton}>Bench Press</button>
              <button name="deadliftbutton" onClick={this.handleDeadliftButton}>Deadlift</button>
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
            <button><Link to={"/users/" + this.props.match.params.id + "/Remove"}>Remove a Session</Link></button>
            <button><Link to={"/"}>Logout</Link></button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default User_Input;
