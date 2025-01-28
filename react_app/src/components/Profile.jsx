import { CircleUser } from "lucide-react";
function Profile(props) {
  return (
    <div>
      {props.isLoggedIn ? (
        <img
          src="https://ui-avatars.com/api/?name=John+Doe"
          className="rounded-full size-6"
        ></img>
      ) : (
        <CircleUser />
      )}
    </div>
  );
}

export default Profile;