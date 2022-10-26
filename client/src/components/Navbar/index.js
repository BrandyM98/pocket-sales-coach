import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/images/Logo.png';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img alt='logo'  width='200' src={Logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="#sales">SALES.</Nav.Link>
            <Nav.Link href="#marketing">MARKETING.</Nav.Link>
            <Nav.Link href="#time">TIME.</Nav.Link>
            <Nav.Link href="#schedule">SCHEDULE.</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#login">LOGIN.</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;