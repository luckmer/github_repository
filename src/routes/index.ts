import IncorrectPage from "../pages/IncorrectPage";
import Main from "../pages/Main";

export const routes = [
  { path: "", Element: Main },
  { path: "*", Element: IncorrectPage }
];
