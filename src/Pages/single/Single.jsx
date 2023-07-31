import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlepst/Singlepst";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <Singlepst />
      <Sidebar />
    </div>
  );
}