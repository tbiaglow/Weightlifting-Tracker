import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import {LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer} from 'recharts';
import {MyWindowPortal} from "../components/MyWindowPortal";
import convertTo1RM from "../utils/convertTo1RM";

class User_BenchPress extends Component {
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
        this.setState({ all: res.data[0].bench_press[0].history })
        var array1 = this.state
      }).then(() => {
        var array1;
        array1 = this.state
        var oneRMArray = convertTo1RM(array1);
        var data = this.formArray(array1, oneRMArray);
        var data = this.trimArray(data)
        var data = this.differentiate(data)
        this.setState({data: data})
    })
      .catch(err => console.log(err));
  };

  
  // Function to create array of objects containing the date and lift weight on that date
  formArray = (array, oneRMArray) => {
    var data = []
    for (var i = 0; i < array.all.length; i++) {
      var d;
      var monthString = array.all[i].month.toString();
      var dayString = array.all[i].day.toString();
      var yearString = array.all[i].year.toString();
      var d = new Date(monthString + "-" + dayString + "-" + yearString);
      var dParsed = Date.parse(d);

      data[i] = {
          x: dParsed,
          y: oneRMArray[i]
      } 
    }
    return data
  }

  // Get rid of all values that are not greater than all previous values to eliminate graphical noise
  trimArray = array => {
    var arrayMax = array[0].y;
    for (var i = 0; i < array.length; i++) {
      if(array[i - 1]) {
        if (array[i].y < arrayMax) {
          array.splice(i, 1);
          i--;
        } else if (array[i].y >= arrayMax) {
          arrayMax = array[i].y
        }
      }
    }
    return array
  }

  //Function to differentiate the data to get user's RATE of progress
  differentiate = data => {
    for (var i = 1; i < data.length - 1; i++) {
      data[i].yDeriv = ((data[i + 1].y - data[i - 1].y) / (data[i + 1].x - data[i - 1].x)) * 86400000 //multiply by number of milliseconds per day to get daily rate of change
    }
    data[data.length - 1].yDeriv = ((data[data.length - 1].y - data[data.length - 2].y) / (data[data.length - 1].x - data[data.length - 2].x)) * 86400000
    return data
  }

  //NOT WORKING, don't know why
  //==========================================================================
  loadRecent = () => {
      this.setState({ all: [] })
      API.getUser(this.props.match.params.id)
        .then(res => {
            this.setState({ all: res.data[0].bench_press[0].history.pop() })
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
              <h1>User Bench Press History</h1>
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
          <MyWindowPortal>
          <h2>Bench Press Progress (y, pounds) and its First Derivative (yDeriv, pounds per day)</h2>
          <ResponsiveContainer width='99%' height={500} >
          <LineChart
            data={this.state.data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line yAxisId="right" type="monotone" dataKey="yDeriv" stroke="#82ca9d" />
          </LineChart>
          </ResponsiveContainer>
          </MyWindowPortal>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default User_BenchPress;
