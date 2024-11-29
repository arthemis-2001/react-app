import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { Col, Container, Row } from "react-bootstrap";
import AddAppointment from "./components/AddAppointment";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-light mt-3">
              <BsFillCalendar2CheckFill /> Appointments
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <AddAppointment />
        </Row>
        <Row className="justify-content-center">
          <Col md={4}>
            <Search />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
