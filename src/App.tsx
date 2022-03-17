import React, { useEffect, useState } from 'react'
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  ListGroup,
  Modal,
  Navbar,
  Row,
} from 'react-bootstrap'
import axios from 'axios'

// import * as qs from 'qs'
//@ts-check
function App() {
  //state
  const [isLoadUser, setIsLoadUser] = React.useState<boolean>(false)
  const [isLoadMsg, setIsLoadMsg] = React.useState<boolean>(false)
  const [newMsg, setNewMsg] = React.useState<string>('')
  const [updateMsg, setUpdateMsg] = React.useState<string>('')
  const [msgId, setMsgId] = React.useState<string>('')
  const [updateUserId, setUpdateUserId] = React.useState<string>('')

  const [show, setShow] = React.useState<boolean>(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [listMsg, setListMsg] = React.useState<any[]>([
    {
      createdAt: '2022-03-14T09:29:45.080Z',
      text: 'Vel ut aperiam vero aut corrupti in tempore eius occaecati. Dolor consequatur sint voluptas rerum facilis voluptatibus. Ut voluptate odio est. Dignissimos et quos sed nesciunt.',
      user_id: 28,
      id: '7',
    },
    {
      createdAt: '2022-03-14T19:14:27.483Z',
      text: 'Impedit quisquam et quia. Esse saepe enim veritatis magni nisi. Delectus velit quis omnis vitae magni voluptas ullam animi nulla. Et laborum praesentium impedit ut accusantium excepturi aut ipsa soluta.',
      user_id: 4,
      id: '8',
    },
    {
      createdAt: '2022-03-15T15:06:15.319Z',
      text: 'Yo',
      user_id: '1',
      id: '9',
    },
    {
      createdAt: '2022-03-15T18:46:51.985Z',
      text: 'Fabuleux',
      user_id: '1',
      id: '10',
    },
    {
      createdAt: '2022-03-16T03:23:59.925Z',
      text: 'Festoyement',
      user_id: '1',
      id: '11',
    },
    {
      createdAt: '2022-03-17T00:34:40.867Z',
      text: 'grout',
      user_id: '2',
      id: '12',
    },
    {
      createdAt: '2022-03-16T17:01:12.608Z',
      text: 'grout2',
      user_id: '2',
      id: '13',
    },
  ])
  const [listUser, setListUser] = React.useState<any[]>([
    {
      name: 'Vincent Murazik',
      id: '1',
    },
    {
      name: 'Ricardo Lang',
      id: '2',
    },
    {
      name: 'Katherine Reichel',
      id: '3',
    },
    {
      name: 'Willis Daugherty',
      id: '4',
    },
    {
      name: 'Earl Homenick',
      id: '5',
    },
    {
      name: 'Dr. Marcus Keeling',
      id: '6',
    },
    {
      name: 'Darnell Harvey',
      id: '7',
    },
    {
      name: 'Nicholas Cummings',
      id: '8',
    },
    {
      name: 'Jimmie Reichert',
      id: '9',
    },
    {
      name: 'Wilson Pollich V',
      id: '10',
    },
    {
      name: 'Miss Freda Raynor',
      id: '11',
    },
    {
      name: 'Charlotte Hoppe',
      id: '12',
    },
    {
      name: 'Wade Fay',
      id: '13',
    },
    {
      name: 'Garrett Runolfsdottir',
      id: '14',
    },
    {
      name: 'Tina Reilly',
      id: '15',
    },
    {
      name: 'Dr. Lloyd Miller',
      id: '16',
    },
    {
      name: 'Carroll Adams',
      id: '17',
    },
    {
      name: 'Elijah Walker',
      id: '18',
    },
    {
      name: 'Colin Toy',
      id: '19',
    },
    {
      name: 'Eduardo Pacocha',
      id: '20',
    },
    {
      name: 'Wilma Spinka',
      id: '21',
    },
    {
      name: 'Willard Anderson',
      id: '22',
    },
    {
      name: 'Tara Walsh',
      id: '23',
    },
    {
      name: 'Nancy Herzog',
      id: '24',
    },
    {
      name: 'Sonia Nienow',
      id: '25',
    },
    {
      name: 'Caleb Turner',
      id: '26',
    },
    {
      name: 'Dale Rosenbaum',
      id: '27',
    },
    {
      name: 'Carlos Macejkovic',
      id: '28',
    },
    {
      name: 'Josh Yundt',
      id: '29',
    },
  ])
  //GET
  useEffect(() => {}, [])

  //
  //POST
  const postMsg = (e: any) => {
    e.preventDefault()

    const modItem = {
      createdAt: '2022-03-14T09:29:45.080Z',
      text: newMsg,
      user_id: '1',
      id: '69',
    }

    console.log(modItem)
    setListMsg([modItem, ...listMsg])
    setNewMsg('')
  }

  //PUT
  const showModalUpdate = (msg: any) => {
    handleShow()
    setUpdateMsg(msg.text)
    setUpdateUserId(msg.user_id)
    setMsgId(msg.id)
    const index = listMsg.findIndex((todo: any) => todo.id === msgId)
    // const indmsg = msg.findIndex((good: any) => good.id === msgId)

    console.log(msg)
    console.log(msg.user_id)
    console.log(updateMsg)
  }
  const updMsg = (e: any) => {
    e.preventDefault()
    const item = {
      createdAt: '2022-03-14T09:29:45.080Z',
      text: updateMsg,
      user_id: updateUserId,
      id: msgId,
    }
    const index = listMsg.findIndex((todo: any) => todo.id === msgId)
    const newList = [...listMsg]
    newList[index] = item
    setListMsg(newList)

    console.log(index)
    handleClose()
  }

  //DELETE
  const deleteMsg = (id: any) => {
    const taches: any = listMsg.filter((msg: any) => msg.id !== id)

    setListMsg(taches)
  }

  return (
    <>
      <Container fluid className='p-0'>
        <Navbar className='px-2' bg='secondary' color='white' style={{ height: '5vh' }}>
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
          <Col
            lg='3'
            style={{
              display: 'block',
              height: '100vh',
              overflowY: 'scroll',
            }}
          >
            <h2 className=' my-3'>User list</h2>
            <hr />
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
          <Col className='border-start' lg='9' style={{ height: '100vh' }}>
            <h2 className='my-3'>Message List</h2>
            <hr />
            <Container
              id='board'
              style={{
                display: 'block',
                height: '60vh',
                overflowY: 'scroll',
              }}
            >
              {isLoadMsg ? (
                <p>Chargement...</p>
              ) : (
                <>
                  {listMsg.map((msg) => (
                    <div key={msg.id} className='d-flex justify-content-start mb-3'>
                      <Card style={{ width: '30rem' }}>
                        <Card.Body>
                          {listUser
                            .filter((user) => user.id == msg.user_id)
                            .map((user) => (
                              <Card.Title key={user.id}>{user.name}</Card.Title>
                            ))}
                          <Card.Text>{msg.text}</Card.Text>
                          <Card.Text className='d-flex justify-content-end'>
                            <Button
                              className='button bg-white'
                              onClick={() => showModalUpdate(msg)}
                            >
                              <img src='/src/assets/icons8-stylo-à-bille-16.png' alt='trash' />
                            </Button>
                          </Card.Text>
                          <Card.Text className='d-flex justify-content-end'>
                            <Button
                              className='button bg-white'
                              onClick={() => deleteMsg(msg.id)}
                            >
                              <img src='/src/assets/filled-trash_16.png' alt='trash' />
                            </Button>
                          </Card.Text>
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
                style={{ width: '74.8%', position: 'fixed', bottom: '0%' }}
              >
                {/* <hr /> */}
                <Form
                  onSubmit={postMsg}
                  noValidate
                  className='my-4 d-flex justify-content-center'
                >
                  <Form.Label htmlFor='inputTask'></Form.Label>
                  <InputGroup>
                    <FormControl
                      placeholder='Saissez un message'
                      aria-label='Username'
                      aria-describedby='basic-addon1'
                      value={newMsg}
                      onChange={(e) => setNewMsg(e.currentTarget.value)}
                    />
                  </InputGroup>
                </Form>
                <img src='https://img.icons8.com/material-sharp/24/000000/user-male-circle.png' />
              </Container>
            </Container>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modifier un message</Modal.Title>
              </Modal.Header>
              <Form onSubmit={updMsg}>
                <Modal.Body>
                  <Form.Label htmlFor='update'></Form.Label>
                  <InputGroup className='mb-3' size='sm'>
                    <Form.Control
                      type='text'
                      id='update'
                      as='textarea'
                      name='message'
                      placeholder='Message'
                      aria-describedby='taskHelpBlock'
                      value={updateMsg}
                      onChange={(e) => setUpdateMsg(e.currentTarget.value)}
                      style={{ height: '100px' }}
                      // {...console.log(updateMsg)}
                    />
                  </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='outline-success' type='submit' id='button-addon2'>
                    Modifier
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
