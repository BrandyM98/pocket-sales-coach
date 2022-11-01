import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import coaches from "../info/coaches";
import Auth from '../utils/auth';

const Coach = () => {
  return (
    <>
      <h1 className="coach text-center my-5"> MEET THE COACHES.</h1>
      {Auth.loggedIn() ? (

      <><CardGroup style={{ paddingInline: "10%", paddingBottom: "10%" }}>
          {coaches.map((coach, i) => (
            <Card style={{ width: "18rem" }} key={i}>
              <Card.Img variant="top" src={coach.image} />
              <Card.Body className="d-flex flex-column justify-content-between align-items-center text-center ">
                <div>
                  <Card.Title>{coach.name}</Card.Title>
                  <Card.Subtitle className="my-2 fs-6 text-muted">
                    {coach.specialty}
                  </Card.Subtitle>
                </div>
                <Card.Text>{coach.desc}</Card.Text>
                <Button variant="danger" size="lg" target='blank' href="https://calendly.com/pocket-coach-project/30min?month=2022-10">
                  Book Now!
                </Button>
              </Card.Body>
            </Card>
          ))}
        </CardGroup><Form
          style={{
            paddingLeft: "10%",
            paddingRight: "10%",
            paddingBottom: "10%",
          }}
        >

            <h1 className="text-center fs-2"> ASK A COACH.</h1>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Select
              className="text-muted mb-3"
              aria-label="Default select example"
            >
              <option>Select a Specialty</option>
              <option value="1">Sales</option>
              <option value="2">Marketing</option>
              <option value="3">Time Management</option>
              <option value="4">Life Coach</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Questions or Comments</Form.Label>
              <Form.Control
                type="text"
                placeholder="Type your questions here...a coach will get back to you within 24 hours." />
            </Form.Group>
            <Button className=" my-4 px-4" variant="danger" type="submit" size="lg">
              Submit
            </Button>
          </Form></>
      ) : (
        <><p>Looks like you need to an account to access this. Sign up <a href='/signup'>here</a>.</p>
        <p>If you already have an account, login <a href='/login'>here.</a></p></>
      )}
    </>
  );
};

export default Coach;
