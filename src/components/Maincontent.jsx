import { useState } from "react";
import ProfileContext from "../contexts/ProfileContext";
import Page from "./Page";
import TopNav from "./TopNav";

export default function Maincontent() {
  const [username, setUsername] = useState("satish");
  return (
    <ProfileContext.Provider
      value={{
        username: username,
        setUsername: setUsername
      }}
    >
      <div style={{ width: "100%" }}>
        <TopNav />
        <Page />
      </div>
    </ProfileContext.Provider>
  );
}
