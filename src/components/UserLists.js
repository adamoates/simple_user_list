/* eslint-disable jsx-a11y/anchor-is-valid */
import "./UserLists.css";

function UserLists({ users }) {
  return (
    <div className="container">
      {users.map((user) => (
        <div className="profile" key={user.id}>
          <div className="img">
            <img
              src="https://i.pravatar.cc/150?img=1"
              alt="profile-pic"
              height="100px"
              width="100px"
            />
          </div>
          <div className="details">
            <p>id: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>
              Email: <a href="#">{user.email}</a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserLists;
