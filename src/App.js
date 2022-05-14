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
          return setUsers(res.data);
        })
        .catch((error) => {
          return error;
        });
    getUsers();
  }, []);

  return <UserLists key={users.id} users={users} />;
}

export default App;
