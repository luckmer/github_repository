import { Routes, Route } from "react-router-dom";
import { routes } from "./routes/index";
import { Main } from "./css/App.style";
import NavBar from "./components/NavBar";

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
