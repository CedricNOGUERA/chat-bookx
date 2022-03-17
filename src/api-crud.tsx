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
  // const [isLoadUser, setIsLoadUser] = React.useState<boolean>(false)
  // const [isLoadMsg, setIsLoadMsg] = React.useState<boolean>(false)
  const [newMsg, setNewMsg] = React.useState<string>('')
  const [updMsg, setUpdateMsg] = React.useState<string>('')
  const [msgId, setMsgId] = React.useState<string>('')

  const [show, setShow] = React.useState<boolean>(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [listMsg, setListMsg] = React.useState<any[]>([])
  const [listUser, setListUser] = React.useState<any[]>([])
  //GET
  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://622a896c14ccb950d21e946d.mockapi.io/users',
      headers: {},
    }

    axios(config)
      .then(function (response) {
        setListUser(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })

    var config = {
      method: 'get',
      url: 'https://622a896c14ccb950d21e946d.mockapi.io/messages',
      headers: {
        Basic:
          'NzMyMzkwNzg6dGVzdHBhc3N3b3JkX1NiRWJlT3VlYU1EeWc4UnRlaTFiU2FpQjVsbXM5VjBaRGp6bGRHWEdBbkl3SA==',
      },
    }

    axios(config)
      .then(function (response) {
        setListMsg(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  //
  //POST
  const postMsg = (e: any) => {
    e.preventDefault()

    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

    var urlencoded = new URLSearchParams()
    urlencoded.append('user_id', '2')
    urlencoded.append('text', `${newMsg}`)

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
    }
    fetch('https://622a896c14ccb950d21e946d.mockapi.io/messages', requestOptions)
      .then((response) => response.text())
      .then((result) => setListMsg([result, ...listMsg]))
      .catch((error) => console.log('error', error))

    setNewMsg('')
  }

  // //PUT
  // function showModalUpdate(msg: any) {
  //   handleShow()
  //   setUpdateMsg(msg.text)
  //   setMsgId(msg.id)
  //   console.log(msg.id)
  // }

  // const updMsg = (e: any) => {
  //   e.preventDefault()
  //   var data = qs.stringify({
  //     text: updMsg,
  //   })
  //   var config = {
  //     method: 'put',
  //     url: `https://622a896c14ccb950d21e946d.mockapi.io/messages/${msgId}`,
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     data: data,
  //   }

  //   axios(config)
  //     .then(function (response) {
  //       console.log(response.data.id)
  //       const resp = response.data
  //       console.log(resp.id)

  //       setListMsg(resp)
  //     })
  //     .catch(function (error) {
  //       console.log(error)
  //     })
  //   handleClose()
  // }

  //DELETE
  const deleteMsg = (id: any) => {
    var config = {
      method: 'delete',
      url: `https://622a896c14ccb950d21e946d.mockapi.io/messages/${id}`,
      headers: {},
    }

    axios(config)
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
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

            <ListGroup variant='flush'>
              {listUser.map((user) => (
                <ListGroup.Item key={user.id}>{user.name}</ListGroup.Item>
              ))}
            </ListGroup>
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
                            // onClick={() => showModalUpdate(msg)}
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
              <Form
              // onSubmit={updateMsg}
              >
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
                      value={updMsg}
                      onChange={(e) => setUpdateMsg(e.currentTarget.value)}
                      style={{ height: '100px' }}
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
