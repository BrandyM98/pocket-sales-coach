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
          <img alt='logo' width='150' src={Logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link  href="#sales" className='fs-5'>SALES.</Nav.Link>
            <Nav.Link  href="#marketing" className='fs-5' >MARKETING.</Nav.Link>
            <Nav.Link href="#time" className='fs-5'>TIME.</Nav.Link>
            <Nav.Link href="#schedule" className='fs-5'>SCHEDULE.</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="danger" href="#login" className='fs-4'>LOGIN.</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;