import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class User_Hub extends Component {
  state = {
    user: []
  };

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    console.log(this.props.match.params.id)
    //Get the user whose id matches the id in the URL
    API.getUser(this.props.match.params.id)
      .then(res => {
        //Set this.state equal to the user data
        this.setState({ user: res.data })
        console.log(res.data)
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>User History</h1>
            </Jumbotron>
            <button><Link to={"/users/" + this.props.match.params.id + "/Input"}>Enter New Lift Information</Link></button>
            <button><Link to={"/users/" + this.props.match.params.id + "/Remove"}>Remove a Session</Link></button>
            <button><Link to={"/"}>Logout</Link></button>
            {this.state.user.length ? (
              <List>
                {this.state.user.map(user => (
                  <ListItem key={user.id}>
                    <div>Competitive Lifts (Powerlifting and Strengthlifting)</div>
                    <Link to={"/users/" + user.id + "/squat"}>
                      <strong>
                        Squat
                      </strong>
                    </Link>
                    <br></br>
                    <Link to={"/users/" + user.id + "/press"}>
                      <strong>
                        Press
                      </strong>
                    </Link>
                    <br></br>
                    <Link to={"/users/" + user.id + "/deadlift"}>
                      <strong>
                        Deadlift
                      </strong>
                    </Link>
                    <br></br>
                    <Link to={"/users/" + user.id + "/benchpress"}>
                      <strong>
                        Bench Press
                      </strong>
                    </Link>
                    <br></br><br></br>
                    <div>Competitive Lifts (Olympic Weightlifting)</div>
                    <Link to={"/users/" + user.id + "/snatch"}>
                      <strong>
                        Snatch
                      </strong>
                    </Link>
                    <br></br>
                    <Link to={"/users/" + user.id + "/cleanandjerk"}>
                      <strong>
                        Clean and Jerk
                      </strong>
                    </Link>
                    <br></br><br></br>
                    <div>Accessory Lifts</div>
                    <Link to={"/users/" + user.id + "/pausesquat"}>
                      <strong>
                        Pause Squat
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-6 sm-12">
            <br></br>
            <div>This is your main user page. From here, you can select a lift to view your entire training history for that lift. You can also add or remove a training sesion from this page.</div>
          </Col>
        </Row>
      </Container>

    );
  }
}

export default User_Hub;
