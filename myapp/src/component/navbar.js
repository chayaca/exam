import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'
// import routes from './routes'
export default function Menu() {
   return (
      <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
               <Navbar.Brand href="/">Weather</Navbar.Brand>
               <Nav className="mr-auto">
                  <Link className="text-info px-3" to='/page1'>register</Link>
                  <Link className="text-info px-3" to='/page2'>show details</Link>
                  <Link className="text-info px-3" to='/page3'>all users</Link>
               </Nav>
            </Navbar>
      </>)
}