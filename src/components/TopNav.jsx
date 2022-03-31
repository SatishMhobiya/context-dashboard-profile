import { useContext } from "react";
import ProfileContext from "../contexts/ProfileContext";

export default function TopNav() {
  const profileContextValue = useContext(ProfileContext);
  return (
    <div
      style={{
        background: "grey",
        display: "flex",
        justifyContent: "flex-end",
        height: "50px",
        alignItems: "center"
      }}
    >
      {profileContextValue.username}
    </div>
  );
}
