import { useState } from 'react'
import './App.css'
import { Container, Row, Col, Alert, Button, Breadcrumb, Card, Form, FormGroup, FormLabel, FormControl, FormText } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container style={{ paddingTop:100 }}>
      <Form>
        <Row>
          <Col md>
            <FormGroup controlId='formEmail'>
              <FormLabel>Email Address</FormLabel>
              <FormControl type='email' placeholder='example@email.com'/>
              <FormText className='text-muted'>We'll never share your email address.</FormText>
            </FormGroup>
          </Col>
          <Col md>
            <FormGroup controlId='formPassword'>
              <FormLabel>Password</FormLabel>
              <FormControl type='password' placeholder='Password'/>
            </FormGroup>
          </Col>
        </Row>
        <Button variant='secondary'>Log In</Button>
      </Form>
      <Card style={{ color: "#000", marginBottom: "15"}}>
        <Card.Img src='https://picsum.photos/200/100'/>
        <Card.Body>
          <Card.Title>Card Example</Card.Title>
          <Card.Text>This is an example of a React-BootStrap Card</Card.Text>
          <Button variant='primary' type='submit'>Read more</Button>
        </Card.Body>
      </Card>
      <Breadcrumb>
        <Breadcrumb.Item>Item 1</Breadcrumb.Item>
        <Breadcrumb.Item>Item 2</Breadcrumb.Item>
        <Breadcrumb.Item active>Item 3</Breadcrumb.Item>
      </Breadcrumb>
      <Alert variant='success'>This is a button</Alert>
      <Button onClick={() => setCount((count) => count + 1)}>Counter: {count}</Button>
      </Container>
    </>
  )
}

export default App
