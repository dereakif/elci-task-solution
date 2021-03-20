import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <h1>Elci Teknoloji Task</h1>
      <Link className="home-issue-btn " to="/feedback">
        New Issue
      </Link>
    </div>
  );
};
export default Headers;
