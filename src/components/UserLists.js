import "./UserLists.css";
import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function UserLists({ users }) {
  const sortBy = "id";
  const [orderBy, setOrderBy] = useState("asc");

  const sort = () => {
    if (orderBy === "asc") {
      return setOrderBy("desc");
    } else {
      return setOrderBy("asc");
    }
  };
  return (
    <div className="container">
      <div className="header">
        <h1>Simple Users List</h1>
        <button className="btn" onClick={sort}>
          Sort By Id{" "}
          <i>{orderBy === "asc" ? <FaArrowUp /> : <FaArrowDown />}</i>
        </button>
      </div>

      {users
        .map((user) => (
          <div className="profile" key={user.id}>
            <div className="img">
              <img
                src={`https://i.pravatar.cc/150?img=${user.id}`}
                alt={user.name}
                height="100px"
                width="100px"
              />
            </div>
            <div className="details">
              <p>Id: {user.id}</p>
              <p>Name: {user.name}</p>
              <p>
                Email:<a href={"#"}>{user.email}</a>
              </p>
            </div>
          </div>
        ))
        .sort((a, b) => {
          let order = orderBy === "asc" ? 1 : -1;
          return a[sortBy] < b[sortBy] ? -1 * order : 1 * order;
        })}
    </div>
  );
}

export default UserLists;
