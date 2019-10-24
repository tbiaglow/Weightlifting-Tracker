import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import Select from 'react-select';

const lifts = [
  { value: 'squat', label: 'Squat' },
  { value: 'press', label: 'Press' },
  { value: 'deadlift', label: 'Deadlift' },
  { value: 'bench press', label: 'Bench Press' }
];

const rpeValues = [
  {value: 5, label: "5"}, {value: 6, label: "6"}, {value: 6.5, label: "6.5"},
  {value: 7, label: "7"}, {value: 7.5, label: "7.5"}, {value: 8, label: "8"},
  {value: 8.5, label: "8.5"}, {value: 9, label: "9"},
  {value: 9.5, label: "9.5"}, {value: 10, label: "10"},
  {value: "", label: "None"}
];

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

  //Function to change desired lift from dropdown menu
  handleLiftChange = lift => {
    this.setState({lift: lift.value})
  };

  //Function to change RPE from dropdown menu
  handleRPEChange = RPE => {
    this.setState({RPE: RPE.value})
  };

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
            RPE: parseFloat(this.state.RPE)
          }]
        }]
      }

      console.log(newHistoryItem)

      // Switch statement depending on value of this.state.lift should go here
      switch (this.state.lift) {
        case "squat":
          this.placeHistoryItem(res.data[0].squat, newHistoryItem)
          this.sortHistory(res.data[0].squat)
        break;
        case "press":
          this.placeHistoryItem(res.data[0].press, newHistoryItem)
          this.sortHistory(res.data[0].press)
        break;
        case "bench press":
          this.placeHistoryItem(res.data[0].bench_press, newHistoryItem)
          this.sortHistory(res.data[0].bench_press)
        break;
        case "deadlift":
          this.placeHistoryItem(res.data[0].deadlift, newHistoryItem)
          this.sortHistory(res.data[0].deadlift)
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
    alert("Session Saved!")
  }

  //Function to check if the exact year/month/day entered is already present in the dataset
  //If it is, must push lift volume to that data item instead of creating a new one
  //If not, push data to end of array
  placeHistoryItem = (lift, newHistoryItem) => {
    var historyItemPushed = false;
    for (var i = 0; i < lift[0].history.length; i++) {
      if (lift[0].history[i].year === newHistoryItem.year && lift[0].history[i].month === newHistoryItem.month && lift[0].history[i].day === newHistoryItem.day) {
        lift[0].history[i].sets.push(newHistoryItem.sets[0])
        historyItemPushed = true;
      }
    }
    if (historyItemPushed === false) {
     lift[0].history.push(newHistoryItem)
    }
  }

  //Function to sort all history items by date
  sortHistory = (lift) => {
    for (var i = 0; i < lift[0].history.length - 1; i++) {
      if (lift[0].history[i].year > lift[0].history[i + 1].year) {
        var tempObject = lift[0].history[i + 1];
        lift[0].history[i + 1] = lift[0].history[i];
        lift[0].history[i] = tempObject;
      }
    }
    for (var i = 0; i < lift[0].history.length - 1; i++) {
      if (lift[0].history[i].year === lift[0].history[i + 1].year && lift[0].history[i].month > lift[0].history[i + 1].month) {
        var tempObject = lift[0].history[i + 1];
        lift[0].history[i + 1] = lift[0].history[i];
        lift[0].history[i] = tempObject;
      }
    }
    for (var i = 0; i < lift[0].history.length - 1; i++) {
      if (lift[0].history[i].year === lift[0].history[i + 1].year && lift[0].history[i].month === lift[0].history[i + 1].month && lift[0].history[i].day > lift[0].history[i + 1].day) {
        var tempObject = lift[0].history[i + 1];
        lift[0].history[i + 1] = lift[0].history[i];
        lift[0].history[i] = tempObject;
      }
    }
  }


  render() {
    const { lift } = this.state;
    const { RPE } = this.state;
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
              <h2>Select Lift: </h2>
              <Select
                value={lift}
                onChange={this.handleLiftChange}
                options={lifts}
              />
              <h2>Enter {this.state.lift} Volume:</h2>
              <Input name="sets" value={this.state.sets} onChange={this.handleInputChange} placeholder="sets" />
              <Input name="reps" value={this.state.reps} onChange={this.handleInputChange} placeholder="reps" />
              <Input name="weight" value={this.state.weight} onChange={this.handleInputChange} placeholder="weight" />
              <h3>RPE: {this.state.RPE}</h3>
              <Select
                value={RPE}
                onChange={this.handleRPEChange}
                options={rpeValues}
              />
              <text>Note: 1RM data is not calculated for RPE values less than 6.5</text>
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
