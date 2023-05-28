import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navegacion() {
  const isPrimaryView = ({isActive}) => (isActive ? "active" : "notActive")
  
  return (
    <div className="navbar">

      <Navbar  >
        <Container>
          <Nav>
          <NavLink className={isPrimaryView} to="/" > <h5>Home</h5> </NavLink>
          <NavLink className={({isActive}) => (isActive ? "active" : "notActive")} to="/pokemones" >  <h5>Pokemones</h5></NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>

  ); 
}
