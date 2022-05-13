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
          <p>Email: Sincere@april.biz</p>
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
          <p>Email: Shanna@melissa.tv</p>
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
          <p>Email: Nathan@yesenia.net</p>
        </div>
      </div>
    </div>
  );
}

export default UserLists;
