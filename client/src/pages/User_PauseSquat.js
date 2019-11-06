import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import {LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer} from 'recharts';
import {MyWindowPortal} from "../components/MyWindowPortal";
import convertTo1RM from "../utils/convertTo1RM";
import createArray from "../utils/createArray";
import arrayEqualize from "../utils/arrayEqualize";

class User_PauseSquat extends Component {
  state = {
    //Will hold user's history
    squat: [],
    pause_squat: [],
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
        this.setState({ squat: res.data[0].squat[0].history });
        this.setState({ pause_squat: res.data[0].pause_squat[0].history });
      }).then(() => {
        var squatOneRMArray = convertTo1RM(this.state.squat);
        var pauseSquatOneRMArray = convertTo1RM(this.state.pause_squat);
        var squatData = createArray(this.state.squat, squatOneRMArray);
        var pauseSquatData = createArray(this.state.pause_squat, pauseSquatOneRMArray);
        var dataToGraph = arrayEqualize(squatData, pauseSquatData);
        this.setState({data: dataToGraph})
        console.log(this.state.pause_squat);
    })
      .catch(err => console.log(err));
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>User Pause Squat History</h1>
            </Jumbotron>
            <br></br>
            <button onClick={() => this.loadUser()}>Display All</button>
            <button><Link to={"/users/" + this.props.match.params.id}>Back</Link></button>
            <button><Link to={"/"}>Logout</Link></button>
            {/* If the user has data, map it */}
            {this.state.pause_squat.length ? (
                <List>
                    {this.state.pause_squat.map(i => (
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
          <h2>Pause Squat Progress (pounds) compared to squat progress (pounds per day)</h2>
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
            <Line connectNulls yAxisId="left" type="monotone" dataKey="squat" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line connectNulls yAxisId="left" type="monotone" dataKey="pauseSquat" stroke="#82ca9d" />
          </LineChart>
          </ResponsiveContainer>
          </MyWindowPortal>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default User_PauseSquat;
