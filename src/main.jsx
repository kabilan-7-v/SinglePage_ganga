import './index.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Router from './Router';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Router></Router>
  </BrowserRouter>
);