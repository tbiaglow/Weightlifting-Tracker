import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import {LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer} from 'recharts';
import {MyWindowPortal} from "../components/MyWindowPortal";
import convertTo1RM from "../utils/convertTo1RM";
import convertTo1RMBW from "../utils/convertTo1RMBW";
import createArray from "../utils/createArray";
import arrayEqualize from "../utils/arrayEqualize";

class User_PauseDeadlift extends Component {
  state = {
    //Will hold user's history
    deadlift: [],
    pause_deadlift: [],
    //Will hold x and y values for charting
    data: [],
    data_bw: []
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
        this.setState({ deadlift: res.data[0].deadlift[0].history });
        this.setState({ pause_deadlift: res.data[0].pause_deadlift[0].history });
      }).then(() => {
        var deadliftOneRMArray = convertTo1RM(this.state.deadlift);
        var deadliftOneRMArrayBW = convertTo1RMBW(this.state.deadlift, deadliftOneRMArray);
        var pauseDeadliftOneRMArray = convertTo1RM(this.state.pause_deadlift);
        var pauseDeadliftOneRMArrayBW = convertTo1RMBW(this.state.pause_deadlift, pauseDeadliftOneRMArray);
        var deadliftData = createArray(this.state.deadlift, deadliftOneRMArray);
        var deadliftDataBW = createArray(this.state.deadlift, deadliftOneRMArrayBW);
        var pauseDeadliftData = createArray(this.state.pause_deadlift, pauseDeadliftOneRMArray);
        var pauseDeadliftDataBW = createArray(this.state.pause_deadlift, pauseDeadliftOneRMArrayBW);
        var dataToGraph = arrayEqualize(deadliftData, pauseDeadliftData);
        var dataToGraphBW = arrayEqualize(deadliftDataBW, pauseDeadliftDataBW);
        this.setState({data: dataToGraph})
        this.setState({data_bw: dataToGraphBW})
        console.log(this.state.pause_deadlift);
    })
      .catch(err => console.log(err));
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>User Pause Deadlift History</h1>
            </Jumbotron>
            <br></br>
            <button onClick={() => this.loadUser()}>Display All</button>
            <button><Link to={"/users/" + this.props.match.params.id}>Back</Link></button>
            <button><Link to={"/"}>Logout</Link></button>
            {/* If the user has data, map it */}
            {this.state.pause_deadlift.length ? (
                <List>
                    {this.state.pause_deadlift.map(i => (
                        <div>
                        Year: {i.year}
                        <br></br>
                        Month: {i.month}
                        <br></br>
                        Day: {i.day}
                        <br></br>
                        BW: {i.BW}
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
          <h2>Pause Deadlift Progress (y2, pounds) compared to Deadlift progress (y1, pounds per day)</h2>
          <ResponsiveContainer width='99%' height={500} >
          <LineChart
            data={this.state.data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="0 3" />
            <XAxis dataKey="x" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line connectNulls yAxisId="left" type="monotone" dataKey="y1" stroke="blue" activeDot={{ r: 8 }} />
            <Line connectNulls yAxisId="left" type="monotone" dataKey="y2" stroke="red" />
          </LineChart>
          </ResponsiveContainer>
          </MyWindowPortal>
          <MyWindowPortal>
          <h2>Pause Deadlift Progress Relative to BW (y2, pounds) compared to Deadlift progress Relative to BW (y1, pounds per day)</h2>
          <ResponsiveContainer width='99%' height={500} >
          <LineChart
            data={this.state.data_bw}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="0 3" />
            <XAxis dataKey="x" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line connectNulls yAxisId="left" type="monotone" dataKey="y1" stroke="blue" activeDot={{ r: 8 }} />
            <Line connectNulls yAxisId="left" type="monotone" dataKey="y2" stroke="red" />
          </LineChart>
          </ResponsiveContainer>
          </MyWindowPortal>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default User_PauseDeadlift;
