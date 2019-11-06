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

class User_RackPull extends Component {
  state = {
    //Will hold user's history
    deadlift: [],
    rack_pull: [],
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
        this.setState({ deadlift: res.data[0].deadlift[0].history });
        this.setState({ rack_pull: res.data[0].rack_pull[0].history });
        // console.log(this.state.rack_pull)
      }).then(() => {
        var deadliftOneRMArray = convertTo1RM(this.state.deadlift);
        var rackPullOneRMArray = convertTo1RM(this.state.rack_pull);
        // console.log(deadliftOneRMArray);
        // console.log(rackPullOneRMArray);
        var deadliftData = createArray(this.state.deadlift, deadliftOneRMArray);
        var rackPullData = createArray(this.state.rack_pull, rackPullOneRMArray);
        // console.log(deadliftData);
        console.log(rackPullData);
        var dataToGraph = arrayEqualize(deadliftData, rackPullData);
        console.log(dataToGraph);
        this.setState({data: dataToGraph})
        console.log(this.state.rack_pull);
    })
      .catch(err => console.log(err));
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>User Rack Pull History</h1>
            </Jumbotron>
            <br></br>
            <button onClick={() => this.loadUser()}>Display All</button>
            <button><Link to={"/users/" + this.props.match.params.id}>Back</Link></button>
            <button><Link to={"/"}>Logout</Link></button>
            {/* If the user has data, map it */}
            {this.state.rack_pull.length ? (
                <List>
                    {this.state.rack_pull.map(i => (
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
          <h2>Rack Pull Progress (y2, pounds) compared to Deadlift progress (y1, pounds per day)</h2>
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
          </Col>
        </Row>
      </Container>
    );
  }
}

export default User_RackPull;
