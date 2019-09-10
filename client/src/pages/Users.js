import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    Users: []
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
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
              <TextArea name="squat" placeholder="Squat (Optional)" />
              <TextArea name="press" placeholder="Press (Optional)" />
              <TextArea name="deadlift" placeholder="Deadlift (Optional)" />
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
                    <a href={"/users/" + user.id}>
                      <strong>
                        {user.name}
                      </strong>
                    </a>
                    <DeleteBtn />
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

export default Books;
