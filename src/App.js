import "./App.css";
import { useEffect, useState } from "react";
import UserLists from "./components/UserLists";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () =>
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setUsers(res.data);
        });
    getUsers();
  }, []);

  return <UserLists key={users.id} users={users} />;
}

export default App;
