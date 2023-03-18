import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import AssignmentList from "./AssignmentList";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {v4 as uuidv4} from 'uuid'


function App() {

  const [finalGrade, setFinalGrade] = useState(84);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    addAssignment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  function updateGrade() {
    let num = Math.floor(Math.random() * 100) + 1;
    setFinalGrade(num);
  }

  function addAssignment() {
    const newID = uuidv4();
    setAssignments([...assignments, newID]);
  }

  function deleteAssignment() {
    if(assignments.length > 1){
      const newList = assignments.slice(0,-1);
      setAssignments(newList);
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">

          <div className="mt-3">
            <h1 className="jumbotron text-center">Calculate Grade</h1>
          </div>
          
          {/* TEST GRADE INPUT */}
          <InputGroup className="mb-3">
            <InputGroup.Text id="test-grade">
              Test Grade
            </InputGroup.Text>
            <Form.Control
              aria-label="Test Grade"
              aria-describedby="test-grade-input"
              placeholder="1-100"
              type="number"
            />
          </InputGroup>

          {/* FINAL GRADE DISPLAY */}
          <div className="text-center">
            <b>Final Grade: </b> <label>{finalGrade}</label>
          </div>

          {/* RADIO BUTTONS */}
          <Form>
            <div className="mb-3">
              <Form.Check
                label="Use Best Assignments"
                name="group1"
                type="radio"
                id={`inline-radio-1`}
                defaultChecked
              />
              
              <Form.Check
                label="Use All Assignments"
                name="group1"
                type="radio"
                id={`inline-radio-2`}
              />
            </div>
          </Form>

          {/* ADD / REMOVE ASSIGNMENTS BUTTONS */}
          <div className="mb-3" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <span>
              <Button onClick={addAssignment} size="sm" variant="primary" type="submit">
                Add Assignment
              </Button>
            {" "}
              <Button onClick={deleteAssignment} size="sm" variant="secondary" type="submit">
                Delete Assignment
              </Button>
            </span>
          </div>
          
          {/* ASSIGNMENT INPUT AREA */}
          <AssignmentList assignments={assignments} onChange={updateGrade}/> 

        </div>
      </div>
    </div>
  );
}

export default App;
