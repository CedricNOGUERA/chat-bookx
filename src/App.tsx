import React, { useState } from 'react'
import {
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
  const [isLoadUser, setIsLoadUser] = React.useState<boolean>(false)
  const [isLoadMsg, setIsLoadMsg] = React.useState<boolean>(false)
  const [listUser, setListUser] = React.useState<any[]>([
    { id: 1, name: 'Brigitte' },
    { id: 2, name: 'céline' },
    { id: 3, name: 'Sophie' },
    { id: 4, name: 'Corina' },
  ])
  const [listMsg, setListMsg] = React.useState<any[]>([
    {
      id: 1,
      text: 'Optio aut unde suscipit totam voluptatem odit incidunt ea. Qui distinctio placeat et. Quibusdam vel magni saepe. Quibusdam incidunt molestias cum repudiandae vel quaerat in magni. Ut eos a repellendus aut ipsum asperiores dolor sit.',
    },
    {
      id: 2,
      text: 'Unde similique velit error nulla et ut fuga. Eveniet quis asperiores voluptas architecto ut eos eveniet inventore. Aut quo quo impedit itaque atque maiores.',
    },
    {
      id: 3,
      text: 'Amet cum aliquid in nisi tenetur sapiente reprehenderit nihil. Aperiam quo ad sunt quia natus placeat. Vel aliquid quas. Quis possimus impedit unde corrupti et quia nihil molestiae.',
    },
    {
      id: 4,
      text: 'Dolore ut officiis accusantium voluptatem quidem possimus qui accusantium eum. Omnis sed id sint. Fugit explicabo ut mollitia consequatur explicabo aut.',
    },
    {
      id: 3,
      text: 'Amet cum aliquid in nisi tenetur sapiente reprehenderit nihil. Aperiam quo ad sunt quia natus placeat. Vel aliquid quas. Quis possimus impedit unde corrupti et quia nihil molestiae.',
    },
    {
      id: 4,
      text: 'Dolore ut officiis accusantium voluptatem quidem possimus qui accusantium eum. Omnis sed id sint. Fugit explicabo ut mollitia consequatur explicabo aut.',
    },
    {
      id: 3,
      text: 'Amet cum aliquid in nisi tenetur sapiente reprehenderit nihil. Aperiam quo ad sunt quia natus placeat. Vel aliquid quas. Quis possimus impedit unde corrupti et quia nihil molestiae.',
    },
    {
      id: 4,
      text: 'olore ut officiis accusantium voluptatem quidem possimus qui accusantium eum. Omnis sed id sint. Fugit explicabo ut mollitia consequatur explicabo aut.',
    },
  ])

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
            {isLoadUser ? (
              <p>Chargement...</p>
            ) : (
              <ListGroup variant='flush'>
                {listUser.map((user) => (
                  <ListGroup.Item key={user.id}>{user.name}</ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Col>
          <Col className='border-start' lg='9' style={{ paddingBottom: '7%' }}>
            <Container>
              <h2 className='border-bottom'>Liste des messages</h2>
              {isLoadMsg ? (
                <p>Chargement...</p>
              ) : (
                <>
                  {listMsg.map((msg) => (
                    <div className='d-flex justify-content-start mb-3'>
                      <Card style={{ width: '30rem' }}>
                        <Card.Body>
                          <Card.Title>user name</Card.Title>

                          <Card.Text>{msg.text}</Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </>
              )}
            </Container>
            <Container className='d-flex justify-content-center mx-0 px-0' fluid='lg'>
              <Container
                className='bg-light'
                style={{ width: '74.6%', position: 'fixed', bottom: '0%' }}
              >
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
