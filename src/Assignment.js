import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup'



export default function Assignment(props) {
  return (
    <Form>
      <Row>
        <Col>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="weight">Weight</InputGroup.Text>
            <Form.Control
              aria-label="Weight"
              aria-describedby="assignment-weight"
              type="number"
              placeholder="1-100"
            />
          </InputGroup>
        </Col>

        <Col>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="grade">Grade</InputGroup.Text>
            <Form.Control
              aria-label="Grade"
              aria-describedby="assignment-grade"
              type="number"
              placeholder="1-100"
            />
          </InputGroup>
        </Col>
      </Row>
    </Form>
  )
}
