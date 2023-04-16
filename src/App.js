import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import DashboardHeader from "./components/DashboardHeader";
import Editor from "./components/Editor";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <DashboardHeader />
        <Editor />
      </div>
    </BrowserRouter>
  );
}

export default App;
