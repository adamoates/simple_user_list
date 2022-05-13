/* eslint-disable jsx-a11y/anchor-is-valid */
import "./UserLists.css";

function UserLists() {
  return (
    <div className="container">
      <div className="profile">
        <div className="img">
          <img
            src="https://i.pravatar.cc/150?img=1"
            alt="profile-pic"
            height="100px"
            width="100px"
          />
        </div>
        <div className="details">
          <p>id: 1</p>
          <p>Name: Leanne Graham</p>
          <p>
            Email: <a href="#">Sincere@april.biz</a>
          </p>
        </div>
      </div>

      <div className="profile">
        <div className="img">
          <img
            src="https://i.pravatar.cc/150?img=2"
            alt="profile-pic"
            height="100px"
            width="100px"
          />
        </div>
        <div className="details">
          <p>id: 2</p>
          <p>Name: Ervin Howell</p>
          <p>
            Email: <a href="#">Shanna@melissa.tv</a>
          </p>
        </div>
      </div>

      <div className="profile">
        <div className="img">
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="profile-pic"
            height="100px"
            width="100px"
          />
        </div>
        <div className="details">
          <p>id: 3</p>
          <p>Name: Clementine Bauch</p>
          <p>
            Email: <a href="#">Nathan@yesenia.net</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserLists;
