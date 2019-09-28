import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class User_Remove extends Component {
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

  //Strategy: get all data for user with particular id =>
  //loop through history array until you find a match between this.state params and res.data params =>
  //pop that history element out of res.data array => update as in user_input
  handleFormSubmit = event => {
    event.preventDefault();
       //Get the user whose id matches the id in the URL
    API.getUser(this.props.match.params.id)
    .then(res => {
      console.log(res.data)
      var array1 = res.data
    switch (this.state.lift) {
        case "squat" :
        for (var i = 0; i < array1[0].squat[0].history.length; i++) {
          if (array1[0].squat[0].history[i].year == this.state.year && array1[0].squat[0].history[i].month == this.state.month && array1[0].squat[0].history[i].day == this.state.day) {
            array1[0].squat[0].history.splice(i, 1)
          }
        }
        break;
        case "press" :
        for (var i = 0; i < array1[0].press[0].history.length; i++) {
          if (array1[0].press[0].history[i].year == this.state.year && array1[0].press[0].history[i].month == this.state.month && array1[0].press[0].history[i].day == this.state.day) {
            array1[0].press[0].history.splice(i, 1)
          }
        }
        break;
        case "bench press" :
        for (var i = 0; i < array1[0].bench_press[0].history.length; i++) {
          if (array1[0].bench_press[0].history[i].year == this.state.year && array1[0].bench_press[0].history[i].month == this.state.month && array1[0].bench_press[0].history[i].day == this.state.day) {
            array1[0].bench_press[0].history.splice(i, 1)
          }
        }
        break;
        case "deadlift" :
        for (var i = 0; i < array1[0].deadlift[0].history.length; i++) {
          if (array1[0].deadlift[0].history[i].year == this.state.year && array1[0].deadlift[0].history[i].month == this.state.month && array1[0].deadlift[0].history[i].day == this.state.day) {
            array1[0].deadlift[0].history.splice(i, 1)
          }
        }
        break;
    }
      this.setState({userData: array1[0]})
      console.log(this.state.userData)
    })
    API.deleteUser(this.props.match.params.id)
    .then(() => {
      console.log(this.state.userData)
      API.saveUser(this.state.userData)
    })
    alert("Session Removed!")
    }


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Remove a Session by Date</h1>
            </Jumbotron>
            <form>
              <Input name="year" value={this.state.year} onChange={this.handleInputChange} placeholder="Year (required)" />
              <Input name="month" value={this.state.month} onChange={this.handleInputChange} placeholder="Month (required)" />
              <Input name="day" value={this.state.day} onChange={this.handleInputChange} placeholder="Day of the month (required)" />
              <h2>Select Lift: {this.state.lift}</h2>
              <button name="squatbutton" onClick={this.handleSquatButton}>Squat</button>
              <button name="pressbutton" onClick={this.handlePressButton}>Press</button>
              <button name="benchpressbutton" onClick={this.handleBenchPressButton}>Bench Press</button>
              <button name="deadliftbutton" onClick={this.handleDeadliftButton}>Deadlift</button>
              <FormBtn
                onClick={this.handleFormSubmit}
              >Submit</FormBtn>
            </form>
            <button><Link to={"/users/" + this.props.match.params.id}>View History</Link></button>
            <button><Link to={"/users/" + this.props.match.params.id + "/Input"}>Enter New Lift Information</Link></button>
            <button><Link to={"/"}>Logout</Link></button>
          </Col>
        </Row>
      </Container>
    );
  }
  
}

export default User_Remove;