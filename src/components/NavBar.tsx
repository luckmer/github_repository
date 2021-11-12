import { Nav, Header, Ul, ButtonLi } from "../css/Nav.style";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Nav>
      <Header>
        <Ul>
          <Link to="/">
            <ButtonLi>FINDER</ButtonLi>
          </Link>
        </Ul>
      </Header>
      <Header>
        <Ul>
          <Link to="/help">
            <ButtonLi>HELP</ButtonLi>
          </Link>
        </Ul>
      </Header>
    </Nav>
  );
};

export default NavBar;
