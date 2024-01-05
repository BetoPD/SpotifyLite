import { useState } from "react";
import Main from "./Components/Main";
import Login from "./Components/Login";
import "./Styles/App.css";

function App() {
  const [token, setToken] = useState("");

  return (
    <div>
      {token ? (
        <Main token={token} setToken={setToken} />
      ) : (
        <Login setToken={setToken} />
      )}
    </div>
  );
}

export default App;
