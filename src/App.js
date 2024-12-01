import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import AddAppointment from "./components/AddAppointment";
import Search from "./components/Search";
import AppointmentInfo from "./components/AppointmentInfo";
import appointments from "./data.json";

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
          <Col md="4">
            <Search />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            <Card className="mb-3">
              <Card.Header>Appointments</Card.Header>
              <ListGroup variant="flush">
                {appointments.map((appointment) => (
                  <AppointmentInfo
                    key={appointment.id}
                    appointment={appointment}
                  />
                ))}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
