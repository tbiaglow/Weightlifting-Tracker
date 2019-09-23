import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
class User_Hub extends Component {
  state = {
    //Will hold user's history
    all: []
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
        console.log(this.state.all.pop())
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
        </Row>
      </Container>
    );
  }
}

export default User_Hub;
