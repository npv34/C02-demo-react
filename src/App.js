import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Login from "./components/login/Login";
import UserList from "./components/users/UserList";
import Layout from "./page/layout/Layout";
import Timer from "./components/timer/Timer";
import Table from "./components/table/Table";
import UserDetail from "./components/users/UserDetail";
function App() {

  return (
    <div className="App">
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Layout />} >
                <Route path="/users" element={<UserList />} />
                <Route path="/users/:id" element={<UserDetail />} />
                <Route path="/timer" element={<Timer />} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;
