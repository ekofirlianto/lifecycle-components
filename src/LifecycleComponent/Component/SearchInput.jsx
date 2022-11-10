import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';

export default class SearchNews extends React.Component {
  render() {
    return (
      <Container>
        <Row className="Search">
          <Col className md={12}>
            <InputGroup className="mb-3">
              <FormControl placeholder="Search News..." aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.props.handleChange} />
              <Button onClick={this.props.handleClick} variant="warning" id="button-addon2">
                Search
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
