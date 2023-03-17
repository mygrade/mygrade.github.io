import 'bootstrap/dist/css/bootstrap.css';
import Assignment from "./Assignment";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">

          <h1 className="jumbotron text-center">Calculate Grade</h1>
          
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
          <div class="text-center">
            <label>Final Grade: </label> <label>89</label>
          </div>

          {/* RADIO BUTTONS */}
          <Form>
            <div className="mb-3">
              <Form.Check
                label="Use Best Assignments"
                name="group1"
                type="radio"
                id={`inline-radio-1`}
              />
              <Form.Check
                label="Use All Assignments"
                name="group1"
                type="radio"
                id={`inline-radio-2`}
              />
            </div>
          </Form>

          {/* ASSIGNMENT INPUT AREA */}
        
          <div id="assignmentsArea">
            <Assignment/>
          </div>
        
          
          {/* ADD ASSIGNMENTS BUTTON */}
          <Button variant="primary" type="submit">
            Add Assignment
          </Button>

        </div>
      </div>
    </div>
  );
}

export default App;
