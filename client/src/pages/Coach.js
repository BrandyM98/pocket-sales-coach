import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import coaches from '../info/coaches';



const Coach = () => {
  return (
    <>
    <CardGroup>
    {coaches.map((coach, i) => (
      
      <Card style={{ width: '18rem' }}key={i}>
      <Card.Img variant="top" src={coach.image} />
      <Card.Body className='flex-wrap justify-content-space-between align-items-center text-center '>
        <div>
        <Card.Title>{coach.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{coach.specialty}</Card.Subtitle>
        </div>
        <Card.Text >
          {coach.desc}
        </Card.Text>
        </Card.Body>
        <Card.Footer classname= "flex-wrap justify-content-space-between align-items-center text-center">
        <Button classname= "text-center" size="lg" variant="danger" href="https://calendly.com/pocket-coach-project/30min" target="_blank">Book Your Coaching Call Here</Button>
        </Card.Footer>
      
    </Card>
    ))}
</CardGroup>
 <Form className="m-5 mb-3">
  <h1 className="text-center"> ASK A COACH</h1>
 <Form.Group className="mb-3" controlId="formBasicPassword">
   <Form.Label>Name</Form.Label>
   <Form.Control type="password" placeholder="Password" />
 </Form.Group>
 <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>Email address</Form.Label>
   <Form.Control type="email" placeholder="Enter email" />
   <Form.Text className="text-muted">
     We'll never share your email with anyone else.
   </Form.Text>
 </Form.Group>
 <Form.Select className="text-muted mb-3" aria-label="Default select example">
      <option>Select a Topic</option>
      <option value="1">Sales</option>
      <option value="2">Marketing</option>
      <option value="3">Time Management</option>
    </Form.Select>
 <Form.Group className="mb-3" controlId="formBasicPassword">
   <Form.Label>Questions or Comments</Form.Label>
   <Form.Control type="text" placeholder="Type your questions here...a coach will get back to you within 24 hours." />
 </Form.Group>
 <Button variant="danger" type="submit" size="lg">
   Submit
 </Button>
</Form>
</>
  )
}

export default Coach