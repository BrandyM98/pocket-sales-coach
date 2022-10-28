import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/images/Logo.png';
import Button from 'react-bootstrap/Button'
import './navbar.css';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img alt='logo' width='125' src={Logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link  href="/course/635a6f921c253cacc94f1d4d" className='fs-5 text-light'>SALES.</Nav.Link>
            <Nav.Link  href="/course/635a6f921c253cacc94f1d4c" className='fs-5 text-light' >MARKETING.</Nav.Link>
            <Nav.Link href="/course/635a6f921c253cacc94f1d4e" className='fs-5 text-light'>TIME.</Nav.Link>
            <Nav.Link href="#schedule" className='fs-5 text-light'>SCHEDULE.</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="danger" href="#login" className='btn fs-5'>LOGIN.</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;