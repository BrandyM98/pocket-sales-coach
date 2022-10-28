import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import coaches from '../info/coaches';



const Coach = () => {
  return (
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
        <Button variant="danger">Book Now!</Button>
      </Card.Body>
    </Card>
    ))}
</CardGroup>
  )
}

export default Coach