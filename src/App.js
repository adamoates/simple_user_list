import "./App.css";
import { useEffect, useState } from "react";
import UserLists from "./components/UserLists";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUser(response.data);
    });
  }, []);

  return <UserLists user={user} />;
}

export default App;
