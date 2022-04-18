import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Moviecard({el}) {
  return (
    <div>
<Card  style={{ width: '18rem', height:'500px' }}>
  <Card.Img style={{ height:'60%'}}variant="top" src={el.posterUrl} />
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text>
     Click on see more for more details.
    </Card.Text>
    <Button variant="primary" as={Link} to={`/movies/${el.id}`}>See more</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default Moviecard