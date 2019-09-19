import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Users extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.loadUsers();

  }

  loadUsers = () => {
    API.getUsers()
      .then(res => {
        this.setState({ users: res.data })
        console.log(res.data)
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Enter your most recent session</h1>
            </Jumbotron>
            <form>
              <Input name="userName" placeholder="User Name (required)" />
              <Input name="year" placeholder="Year (required)" />
              <Input name="month" placeholder="Month (required)" />
              <Input name="day" placeholder="Day of the month (required)" />
              <Input name="squat" placeholder="Squat (Optional)" />
              <Input name="press" placeholder="Press (Optional)" />
              <Input name="deadlift" placeholder="Deadlift (Optional)" />
              <FormBtn>Submit session</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>User History</h1>
            </Jumbotron>
            {this.state.users.length ? (
              <List>
                {this.state.users.map(user => (
                  <ListItem key={user.id}>
                    <Link to={"/users/" + user.id}>
                      <strong>
                        {user.name}
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

export default Users;