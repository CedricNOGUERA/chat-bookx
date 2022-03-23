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
import './App.css'

function App() {
  //state
  const [isMe, setIsMe] = React.useState<string>('')
  const [isAuth, setIsAuth] = React.useState<boolean>(false)
  const [isError, setIsErrorAuth] = React.useState<boolean>(false)
  const [isLoadUser, setIsLoadUser] = React.useState<boolean>(false)
  const [isLoadMsg, setIsLoadMsg] = React.useState<boolean>(false)
  const [newMsg, setNewMsg] = React.useState<string>('')
  const [updateMsg, setUpdateMsg] = React.useState<string>('')
  const [msgId, setMsgId] = React.useState<string>('')

  const [show, setShow] = React.useState<boolean>(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [showAuth, setShowAuth] = React.useState<boolean>(true)
  const handleCloseAuth = () => setShowAuth(false)
  const handleShowAuth = () => setShowAuth(true)

  const [listMsg, setListMsg] = React.useState<any[]>([])
  const [listUser, setListUser] = React.useState<any[]>([])
  const [pseudoUser, setPseudoUser] = React.useState<string>('')
  const [passUser, setPassUser] = React.useState<string>('')

  useEffect(() => {
    axios
      .get('https://622a896c14ccb950d21e946d.mockapi.io/users')
      .then(function (response) {
        setListUser(response.data)
      })
      .catch(function (error) {
        setIsLoadUser(true)
        console.log(error)
      })

    const interval = setInterval(() => {
      axios
        .get('https://622a896c14ccb950d21e946d.mockapi.io/messages')
        .then(function (response) {
          const resp = response.data
          setListMsg(response.data)
        })
        .catch(function (error) {
          setIsLoadMsg(true)
          console.log(error)
        })
    }, 1000)
    return () => clearInterval(interval)

    axios
      .get('https://622a896c14ccb950d21e946d.mockapi.io/messages')
      .then(function (response) {
        const resp = response.data
        setListMsg(response.data)
      })
      .catch(function (error) {
        setIsLoadMsg(true)
        console.log(error)
      })
  }, [])
  // User Auth
  const authUser = (e: any) => {
    const pseudo = pseudoUser
    const pass = passUser
    e.preventDefault()
    if (pseudo && pass) {
      listUser
        .filter((user) => user.pseudo === pseudo && user.pass === pass)
        .map((user: any) => {
          console.log(user.pseudo)
          setIsMe(user.id)
          setIsErrorAuth(false)
          setIsAuth(true)
          console.log(pseudo)
          console.log(pass)
          handleCloseAuth()
        })
    } else {
      setIsErrorAuth(true)
      setIsAuth(false)
    }
  }
  //POST
  const postMsg = (e: any) => {
    e.preventDefault()

    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

    var urlencoded = new URLSearchParams()
    urlencoded.append('user_id', isMe)
    urlencoded.append('text', `${newMsg}`)

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
    }
    fetch('https://622a896c14ccb950d21e946d.mockapi.io/messages', requestOptions)
      .then((response) => response.json())

      .then((result) => setListMsg([...listMsg, result]))
      .catch((error) => console.log('error', error))

    setNewMsg('')
  }

  //PUT
  const showModalUpdate = (msg: any) => {
    handleShow()
    setUpdateMsg(msg.text)
    setMsgId(msg.id)
  }
  const updMsg = (e: any) => {
    e.preventDefault()

    //state codé en dur
    // const item = {
    //   createdAt: '2022-03-14T09:29:45.080Z',
    //   text: updateMsg,
    //   user_id: updateUserId,
    //   id: msgId,
    // }

    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

    var urlencoded = new URLSearchParams()
    urlencoded.append('text', updateMsg)

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: urlencoded,
    }

    fetch(`https://622a896c14ccb950d21e946d.mockapi.io/messages/${msgId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const index = listMsg.findIndex((todo: any) => todo.id === msgId)
        const newList = [...listMsg]
        newList[index] = result
        setListMsg(newList)
      })
      .catch((error) => console.log('error', error))

    handleClose()
  }

  //DELETE
  const deleteMsg = (id: any) => {
    axios
      .delete(`https://622a896c14ccb950d21e946d.mockapi.io/messages/${id}`)
      .then(function (response) {
        const taches: any = listMsg.filter((msg: any) => msg.id !== id)

        setListMsg(taches)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <>
      <Container fluid className='p-0'>
        <Navbar className='px-2 bg-secondary' style={{ height: '5vh', color: 'white' }}>
          <Navbar.Brand href='#home' className='text-white'>
            <h3>Chat Book</h3>
          </Navbar.Brand>
          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text className='text-white'>Signed in as : Mark Otto</Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <Container fluid style={{ position: 'relative' }}>
        <Row className='d-flex flex-row mt-1'>
          <Col
            lg='3'
            style={{
              display: 'block',
              height: '94vh',
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
                  <ListGroup.Item key={user.id} className='text-secondary'>
                    {user.name}
                  </ListGroup.Item>
                ))}
                {listUser.slice(16, 30)}
              </ListGroup>
            )}
          </Col>
          <Col className='' lg='9' style={{ height: '100vh' }}>
            <h2 className='my-3'>Message List</h2>
            <hr />
            {isAuth && (
              <Container
                id='board'
                style={{
                  display: 'block',
                  height: '65vh',
                  overflowY: 'scroll',
                }}
              >
                {isLoadMsg ? (
                  <p>Chargement...</p>
                ) : (
                  <>
                    {listMsg.map((msg) => (
                      <div
                        key={msg.id}
                        className={
                          msg.user_id == isMe
                            ? 'd-flex justify-content-end mt-3'
                            : 'd-flex justify-content-start mt-3'
                        }
                      >
                        <Card className='bg-light' style={{ width: '30rem' }}>
                          <Card.Body>
                            <sup className='d-flex justify-content-center'>
                              {msg.createdAt.slice(8, 10)}-0{msg.createdAt.slice(6, 7)}-
                              {msg.createdAt.slice(0, 4)} à {msg.createdAt.slice(11, 19)}
                            </sup>
                            <hr />
                            {listUser
                              .filter((user) => user.id == msg.user_id)
                              .map((user) => (
                                <Card.Title key={user.id}>{user.name}</Card.Title>
                              ))}
                            <Card.Text>{msg.text}</Card.Text>
                            <Card.Text className='d-flex justify-content-end'>
                              {msg.user_id == isMe && (
                                <>
                                  <Button
                                    className='bg-white '
                                    onClick={() => showModalUpdate(msg)}
                                  >
                                    <img
                                      src='/src/assets/icons8-stylo-à-bille-16.png'
                                      alt='trash'
                                    />
                                  </Button>
                                  <Button
                                    className='bg-white mx-2'
                                    onClick={() => deleteMsg(msg.id)}
                                  >
                                    <img src='/src/assets/filled-trash_16.png' alt='trash' />
                                  </Button>
                                </>
                              )}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    ))}
                  </>
                )}
              </Container>
            )}
            <Container className='d-flex justify-content-center mx-0 px-0' fluid='lg'>
              <Container
                className='bg-light rounded mb-1'
                style={{ width: '74.8%', position: 'fixed', bottom: '0%' }}
              >
                <Form
                  onSubmit={postMsg}
                  noValidate
                  className='my-4 d-flex justify-content-center'
                >
                  <Form.Label htmlFor='inputMsg'></Form.Label>
                  <InputGroup>
                    <FormControl
                      type='text'
                      id='msg'
                      name='inputMsg'
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

            <Modal show={showAuth} onHide={handleCloseAuth} backdrop='static' keyboard={false}>
              <Modal.Header className='d-flex justify-content-center text-center'>
                <Modal.Title>
                  <img src='./src/assets/icons8-utilisateur-48.png' alt='avatar' />
                  <div>Authentification</div>
                </Modal.Title>
              </Modal.Header>
              <Form onSubmit={authUser}>
                <Modal.Body>
                  <Form.Label htmlFor='pseudo'></Form.Label>
                  <InputGroup className='mb-3' size='sm'>
                    <Form.Control
                      type='text'
                      id='pseudo'
                      name='pseudo'
                      placeholder='Pseudo'
                      aria-describedby='pseudoBlock'
                      value={pseudoUser}
                      onChange={(e) => setPseudoUser(e.currentTarget.value)}
                    />
                  </InputGroup>
                  <Form.Label htmlFor='pass'></Form.Label>
                  <InputGroup className='mb-3' size='sm'>
                    <Form.Control
                      type='password'
                      id='pass'
                      name='pass'
                      placeholder='Mot de passe'
                      aria-describedby='passBlock'
                      value={passUser}
                      onChange={(e) => setPassUser(e.currentTarget.value)}
                    />
                  </InputGroup>
                  {isError && (
                    <div className='text-danger text-center'>
                      Votre pseudo ou votre mot de pas sont incorrect
                    </div>
                  )}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='outline-success' type='submit' id='button-addon2'>
                    Valider
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal>

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
                      style={{ height: '20vh' }}
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

export default React.memo(App)
