import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import PostListComponent from "./pages/PostListComponent";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Login} />
      <Route path="/home" Component={PostListComponent} />
    </Routes>
  );
}

export default App;
