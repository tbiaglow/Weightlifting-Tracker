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
            <button><Link to={"/"}>Logout</Link></button>
            {this.state.user.length ? (
              <List>
                {this.state.user.map(user => (
                  <ListItem key={user.id}>
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
                    <br></br>
                    <Link to={"/users/" + user.id + "/powerclean"}>
                      <strong>
                        Power Clean
                      </strong>
                    </Link>
                    {/* <DeleteBtn /> */}
                  </ListItem>
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