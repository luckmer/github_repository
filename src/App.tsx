import { Routes, Route } from "react-router-dom";
import { routes } from "./routes/index";

import NavBar from "./components/NavBar";
import styled from "styled-components";

const Main = styled.main`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <Main>
      <NavBar />
      <Routes>
        {routes.map(({ path, Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Routes>
    </Main>
  );
};

export default App;
