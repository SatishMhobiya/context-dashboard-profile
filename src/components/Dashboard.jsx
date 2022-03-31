import Maincontent from "./Maincontent";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Maincontent />
    </div>
  );
}
