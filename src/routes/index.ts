import Informations from "../pages/Informations";
import IncorrectPage from "../pages/IncorrectPage";
import Main from "../pages/Main";

export const routes = [
  { path: "", Element: Main },
  { path: "/help", Element: Informations },
  { path: "*", Element: IncorrectPage }
];
