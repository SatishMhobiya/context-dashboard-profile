import { useContext, useState } from "react";
import ProfileContext from "../contexts/ProfileContext";

export default function Profile() {
  const [updatedUsername, setUpdatedUsername] = useState("");
  const profileContextValue = useContext(ProfileContext);

  return (
    <div style={{ marginTop: "10px" }}>
      <input
        type="text"
        placeholder="Enter Username"
        value={updatedUsername}
        onChange={(e) => {
          setUpdatedUsername(e.target.value);
        }}
      />
      <button
        onClick={() => {
          profileContextValue.setUsername(updatedUsername);
        }}
      >
        Update Username
      </button>
    </div>
  );
}
