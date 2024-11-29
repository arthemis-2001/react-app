import { Button, Card, Col, Form, Row } from "react-bootstrap";

const AddAppointment = () => {
  return (
    <>
      <Col md="8">
        <Card className="mb-3">
          <Card.Header>Add Appointment</Card.Header>
          <Card.Body>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>First name</Form.Label>
                  <Form.Control type="text" placeholder="First name" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control type="text" placeholder="Last name" />
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                  <Form.Label>Appointment date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                  <Form.Label>Appointment time</Form.Label>
                  <Form.Control type="time" />
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                  <Form.Label>Additional info</Form.Label>
                  <Form.Control type="textarea" placeholder="Some comments" />
                </Form.Group>
                <Button variant="primary">Submit</Button>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default AddAppointment;
