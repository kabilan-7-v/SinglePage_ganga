import './index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routerpage from './RouterPage';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routerpage />
  </BrowserRouter>
);
