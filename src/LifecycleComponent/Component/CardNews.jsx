import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

export default class CardNews extends React.Component {
  render() {
    return (
      <Container>
        <Row className="row card-container">
          {this.props.news.map((item, index) => {
            return (
              <Col md={4} className="mb-3" key={index}>
                <Card>
                  <Card.Img variant="top" src={item.urlToImage} />
                  <Card.Title className="card-title">{item.title}</Card.Title>
                  <Card.Subtitle className="card-subtitle text-muted">
                    {item.author} - {item.publishedAt}
                  </Card.Subtitle>
                  <Card.Body>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                  <Button href={item.url} rel="noreferrer" target="_blank" variant="warning">
                    Show more...
                  </Button>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
