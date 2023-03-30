import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AssignmentList from "./AssignmentList";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {v4 as uuidv4} from 'uuid'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {

  const [finalGrade, setFinalGrade] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [calcMethod, setCalcMethod] = useState("radio-best");
  const [testGrade, setTestGrade] = useState();
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    if(assignments.length == 0)
      addAssignment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(() => {
    checkErrors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[testGrade, assignments, calcMethod]);

  function updateTestGrade(e){
    setTestGrade(e.target.value);
  }

  function settMethod(e){
    setCalcMethod(e.target.id);
  }

  function handleChange(e) {
    const src = e.target.name.split(":",2);
    const type = src[0];
    const id = src[1];
    const newList = [...assignments];
    for(let i = 0; i < newList.length; i++){
      if(newList[i].id === id){
        newList[i][type] = e.target.value;
        break;
      }
    }
    setAssignments(newList);
  }

  function checkErrors() {
    /* Check test grade */
    const testGradeNum = Number(testGrade);
    let msg = "";
    if(notValid(testGradeNum)){
      msg = "Test grade must be integer from 1 - 100.";
    }

    let weightCount = 0;
    for(let i = 0; i < assignments.length; i++) {
      if(notValid(Number(assignments[i].weight))){
        msg = "Weight must be integer from 1 - 100.";
        break;
      } else {
        weightCount += Number(assignments[i].weight);
        if(weightCount > 100){
          msg = "Total weight count cannot be over 100."
          break;
        }
      }
      if(notValid(Number(assignments[i].grade))){
        msg = "Grade must be integer from 1 - 100.";
        break;
      }
    }
    setErrorMsg(msg);
    calculateGrade();
  }

  function notValid(x){
    return isNaN(x) || !Number.isInteger(x) || x < 0 || x > 100 || x === "";
  }
  
  function calculateGrade() {
    if(calcMethod === "radio-all"){
      calculateAll();
    } else if (calcMethod === "radio-best"){
      calculateBest();
    }
  }

  function calculateBest() {
    let scores = [...assignments];
    
  }

  function calculateAll() {
    let totalWeight = 0, totalPoints = 0;
    
    for(let i = 0; i < assignments.length; i++){
      let curr = assignments[i];
      let currWeight = Number(curr.weight);
      totalWeight += currWeight
      totalPoints += (currWeight / 100) * Number(curr.grade);
    }
    // Add test grade and set final grade
    totalPoints += ((100 - totalWeight) / 100) * testGrade;
    setFinalGrade(-Math.round(-totalPoints));
  }
  
  function addAssignment() {
    const newID = uuidv4();
    setAssignments([...assignments, {
      id: newID,
      weight: '',
      grade: ''
    }]);
  }

  function deleteAssignment() {
    if(assignments.length > 1){
      const newList = [...assignments];
      newList.pop();
      setAssignments(newList);
    }
  }

  return (
    <div className="App">
      <div className="container" style={{maxWidth: "500px"}}>
        <div className="">

          <div className="mt-3">
            <h1 className="jumbotron text-center">Calculate Grade</h1>
          </div>
          
          {/* TEST GRADE INPUT */}
          <div className="center-block">
            <InputGroup className="mb-3">
              <InputGroup.Text id="test-grade">
                Test Grade
              </InputGroup.Text>
              <Form.Control
                name="test-grade"
                onChange={updateTestGrade}
                aria-label="Test Grade"
                aria-describedby="test-grade-input"
                placeholder="1-100"
                type="number"
                className="limit-input-size"
              />
            </InputGroup>
          </div>
          {/* FINAL GRADE DISPLAY */}
          <div className="text-center">
          <label><b>Final Grade: </b>{finalGrade}</label>
          <br/>
          <label>{errorMsg}</label>
          </div>

          {/* RADIO BUTTONS */}
          <div className="mb-3">
            <Form className="mt-3">
              <Row>
                <Col>
                  <Form.Check className="mt-1"
                    label="Use Best Assignments"
                    name="calcMethod"
                    type="radio"
                    id={`radio-best`}
                    defaultChecked
                    onChange={settMethod}
                  />

                  <Form.Check className="mt-2"
                    label="Use All Assignments"
                    name="calcMethod"
                    type="radio"
                    id={`radio-all`}
                    onChange={settMethod}
                    />
                </Col>
                <Col>
                  <InputGroup size="sm" className="mb-3 mt-1">
                    <InputGroup.Text id="inputGroup-sizing-sm">Min Weight</InputGroup.Text>
                    <Form.Control
                      style={{maxWidth: "40px"}}
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                </Col>

              </Row>
            </Form>
          </div>

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
          <AssignmentList assignments={assignments} onChange={handleChange}/> 

        </div>
      </div>
    </div>
  );
}

export default App;
