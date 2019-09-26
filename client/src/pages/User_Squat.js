import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
class User_Squat extends Component {
  state = {
    //Will hold user's history
    all: [],
    //Will hold x and y values for charting
    data: [],
  };

  componentDidMount() {
    this.loadUser()
  }

  //Function to display entire history, run immediately
  loadUser = () => {
    //Reset the all array in case it's already filled from another function
    this.setState({ all: [] })
    //Get the user whose id matches the id in the URL
    API.getUser(this.props.match.params.id)
      .then(res => {
        //Set all to the desired user data
        this.setState({ all: res.data[0].squat[0].history })
        console.log(res.data[0].squat[0].history)
    //     console.log(this.state.all.pop())
        var array1 = this.state
        console.log(array1.all[0])
      }).then(() => {
        console.log(this.state)
        var array1;
        array1 = this.state
        console.log(array1)
        var data = [];
        var labels = [];
        for (var i = 0; i < array1.all.length; i++) {
          var d;
          var monthString = array1.all[i].month.toString();
          var dayString = array1.all[i].day.toString();
          var yearString = array1.all[i].year.toString();
          var d = new Date(monthString + "-" + dayString + "-" + yearString);
          var dParsed = Date.parse(d);
          // console.log(millisecondDate)

          array1.data[i] = {
              x: dParsed,
              y: array1.all[i].sets[0].workPerSet[0].weight,
              type: 'scatter'
          } 
          this.setState({data: array1.data})
        }
        console.log(this.state.data)   
    })
      .catch(err => console.log(err));
  };

  //NOT WORKING, don't know why
  //==========================================================================
  loadRecent = () => {
      this.setState({ all: [] })
      API.getUser(this.props.match.params.id)
        .then(res => {
            this.setState({ all: res.data[0].squat[0].history.pop() })
            this.state.all = [this.state.all]
            console.log(this.state.all.length)
        })
        .catch(err => console.log(err));
  };
  //===========================================================================

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>User Squat History</h1>
            </Jumbotron>
            <br></br>
            <button onClick={() => this.loadUser()}>Display All</button>
            {/* NOT WORKING, don't know why */}
            {/* ========================================================================== */}
            <button onClick={() => this.loadRecent()}>Display Most Recent</button>
            {/* ========================================================================== */}
            <button><Link to={"/users/" + this.props.match.params.id}>Back</Link></button>
            <button><Link to={"/"}>Logout</Link></button>
            {/* If the user has data, map it */}
            {this.state.all.length ? (
                <List>
                    {this.state.all.map(i => (
                        <div>
                        Year: {i.year}
                        <br></br>
                        Month: {i.month}
                        <br></br>
                        Day: {i.day}
                        <br></br>
                        Volume: {i.sets.map(i2 => (
                            <div>
                                Sets: {i2.sets}
                                <br></br>
                                Reps: {i2.workPerSet[0].reps}
                                <br></br>
                                Weight: {i2.workPerSet[0].weight}
                                <br></br>
                                RPE: {i2.workPerSet[0].RPE}
                            </div>
                        ))}
                        <br></br><br></br>
                        </div>
                    ))}
                </List>
            ) : (
                <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Charted History:</h1>
          </Jumbotron>
            {/* <canvas id="myChart" width="400" height="400"></canvas> */}
            {/* {this.state.myChart} */}
            {/* <Plot data={this.state.data} /> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default User_Squat;
