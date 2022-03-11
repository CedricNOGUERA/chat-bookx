import { useState } from 'react'
import {
  Button,
  Card,
  Col,
  Container,
  FormControl,
  InputGroup,
  ListGroup,
  Navbar,
  Row,
} from 'react-bootstrap'

function App() {
  //state

  return (
    <>
      <Container fluid className='p-0 '>
        <Navbar className='px-2' bg='secondary' style={{ height: '10vh' }}>
          <Navbar.Brand href='#home'>
            <h3>Chat Book</h3>
          </Navbar.Brand>
          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
              Signed in as: <a href='#login'>Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <Container fluid style={{ position: 'relative' }}>
        <Row className='d-flex flex-row'>
          <Col lg='3'>
            <h2>Liste des utilisateurs</h2>
            <ListGroup variant='flush'>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col className='border ' lg='9'>
            <h2 className='border-bottom'>Liste des messages</h2>

            <div className='d-flex justify-content-start mb-3'>
              <Card style={{ width: '30rem' }}>
                <Card.Body>
                  <Card.Title>User Name</Card.Title>
                  <Card.Text>Some qu</Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className='d-flex justify-content-start mb-3'>
              <Card style={{ width: '30rem' }}>
                <Card.Body>
                  <Card.Title>User Name</Card.Title>
                  <Card.Text>
                    Some quick example of messageSome quick example of messageSome quick
                    example of message
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className='d-flex justify-content-start mb-3'>
              <Card style={{ width: '30rem' }}>
                <Card.Body>
                  <Card.Title>User Name</Card.Title>
                  <Card.Text>Some qu</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className='d-flex justify-content-end mb-3'>
              <Card style={{ width: '30rem' }}>
                <Card.Body>
                  <Card.Title>User Name</Card.Title>
                  <Card.Text>
                    Some quick example of messageSome quick example of messageSome quick
                    example of message
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className='d-flex justify-content-start mb-3'>
              <Card style={{ width: '30rem' }}>
                <Card.Body>
                  <Card.Title>User Name</Card.Title>
                  <Card.Text>Some qu</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className='d-flex justify-content-start mb-3'>
              <Card style={{ width: '30rem' }}>
                <Card.Body>
                  <Card.Title>User Name</Card.Title>
                  <Card.Text>
                    Some quick example of messageSome quick example of messageSome quick
                    example of message
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <Card style={{ width: '30rem' }}>
              <Card.Body>
                <Card.Title>User Name</Card.Title>
                <Card.Text>Some quick example of message</Card.Text>
              </Card.Body>
            </Card>
            <Container
              className='d-flex justify-content-center bg-light mx-0 '
              fluid='lg'
              style={{ width: '100%', position: 'sticky', bottom: '0%' }}
            >
              <Container>
                <hr />
                <InputGroup className='my-3 d-flex justify-content-center'>
                  <FormControl
                    placeholder='Saissez un message'
                    aria-label='Username'
                    aria-describedby='basic-addon1'
                  />
                </InputGroup>
                <img src='https://img.icons8.com/material-sharp/24/000000/user-male-circle.png' />
              </Container>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
