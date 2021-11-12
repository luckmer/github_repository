import { Nav, Header, Ul, LiHeader, ButtonLi } from "../css/Nav.style";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Nav>
      <Header>
        <Ul>
          <Link to="/">
            <LiHeader>FINDER</LiHeader>
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
