import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/images/Logo.png';
import Button from 'react-bootstrap/Button'
import Auth from '../../utils/auth';





function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='ps-4'>
      <Navbar.Brand to="Home" href="/">
        <img
          alt='logo'
          src={Logo}
          width='125'
          className='d-inline'
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/course/635a6f921c253cacc94f1d4d" className='fs-5 text-light'>SALES.</Nav.Link>
            <Nav.Link href="/course/635a6f921c253cacc94f1d4c" className='fs-5 text-light' >MARKETING.</Nav.Link>
            <Nav.Link href="/course/635a6f921c253cacc94f1d4e" className='fs-5 text-light'>TIME.</Nav.Link>
            {!Auth.loggedIn()
              ? (
              <Nav.Link href=""></Nav.Link>
            ) : (
            <Nav.Link href="/coach" className='fs-5 text-light'>COACHES.</Nav.Link>
            )
            }

          </Nav>
        </Container>

        {!Auth.loggedIn()
          ? (
            <Nav>
              <Button to='Login' variant="danger" href="/login" className='fs-5 me-5'>LOGIN.</Button>
            </Nav>
          ) : (
            <Nav>
              <Button to='Logout' variant="danger" href="/" className='fs-5 me-5' onClick={() => Auth.logout()}>LOGOUT.</Button>
            </Nav>
          )
        }

      </Navbar.Collapse>
    </Navbar>
  );
}

export default CollapsibleExample;
