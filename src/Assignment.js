import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup'


export default function Assignment(props) {
  const {
    id,
    onChange
  } = props;

  return (
    <Form>
      <Row>

        <Col>
          <InputGroup size="med" className="mb-3">
            <InputGroup.Text id={`weight-${id}`}>Weight</InputGroup.Text>
            <Form.Control
              name={`weight:${id}`}
              aria-label="Weight"
              aria-describedby="assignment-weight"
              type="number"
              placeholder="1-100"
              onChange={onChange}
            />
          </InputGroup>
        </Col>

        <Col>
          <InputGroup size="med" className="mb-3">
            <InputGroup.Text id={`grade-${id}`}>Grade</InputGroup.Text>
            <Form.Control
              name={`grade:${id}`}
              aria-label="Grade"
              aria-describedby="assignment-grade"
              type="number"
              placeholder="1-100"
              onChange={onChange}
            />
          </InputGroup>
        </Col>

      </Row>
    </Form>
  )
}
