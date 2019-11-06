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

class User_Deadlift extends Component {
  state = {
    //Will hold user's history
    all: [],
    //Will hold x and y values for charting
    data: [],
    //Will hold x and y values for charting data adjusted for BW
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
        this.setState({ all: res.data[0].deadlift[0].history })
      }).then(() => {
        // var array1 = this.state;
        var oneRMArray = convertTo1RM(this.state.all);
        var oneRMArrayBW = convertTo1RMBW(this.state.all, oneRMArray);
        console.log(oneRMArrayBW);
        var data = createArray(this.state.all, oneRMArray);
        var data_bw = createArray(this.state.all, oneRMArrayBW);
        this.setState({data: data})
        this.setState({data_bw: data_bw})
        console.log(this.state.data_bw)
    })
      .catch(err => console.log(err));
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>User Deadlift History</h1>
            </Jumbotron>
            <br></br>
            <button onClick={() => this.loadUser()}>Display All</button>
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
          <h2>Deadlift Progress (y, pounds) and its First Derivative (yDeriv, pounds per day)</h2>
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
            <Line connectNulls yAxisId="left" type="monotone" dataKey="y" stroke="blue" activeDot={{ r: 8 }} />
            <Line connectNulls yAxisId="right" type="monotone" dataKey="yDeriv" stroke="green" />
          </LineChart>
          </ResponsiveContainer>
          </MyWindowPortal>
          <MyWindowPortal>
          <h2>Deadlift Progress Relative to Bodyweight (y, pounds) and its First Derivative (yDeriv, pounds per day)</h2>
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
            <Line connectNulls yAxisId="left" type="monotone" dataKey="y" stroke="blue" activeDot={{ r: 8 }} />
            <Line connectNulls yAxisId="right" type="monotone" dataKey="yDeriv" stroke="green" />
          </LineChart>
          </ResponsiveContainer>
          </MyWindowPortal>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default User_Deadlift;
