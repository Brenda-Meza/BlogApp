import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchApp from "./Search.jsx"

export default function Navigation({ setSearchResults }) {
  return (
    <div className='Navigation'>
      <Navbar expand="lg" bg="danger" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">Anyone Can Cook</Navbar.Brand> 
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '200px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Explore" id="navbarScrollingDropdown">
                <NavDropdown.Item href="Create">Create & post a blog</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/blog">See All Blogs</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/register">Sign Up</Nav.Link>
              <Nav.Link href="/login">Sign in</Nav.Link>
            </Nav> 
            <Form className="d-flex">
              <SearchApp setSearchResults={setSearchResults} />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
