import React from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Container } from 'react-bootstrap' 
const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark" >
  <Container >
    <Navbar.Brand href="#">MYDAIRY</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll >
        
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
        <NavDropdown title="Customer" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/">AddCustomer</NavDropdown.Item>
          <NavDropdown.Item href="/add">AddMilk</NavDropdown.Item>
          <NavDropdown.Item href="/history">MilkHistry</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            
          </NavDropdown.Item>
        </NavDropdown>
     
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    )
}

export default Header