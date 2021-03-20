import React, { useState, useEffect } from "react";
import "./Home.scss";
const Home = () => {
  const [issues, setIssues] = useState([]);
  const [msgCount, setMsgCount] = useState(0);
  function wsInit() {
    const connection = new WebSocket("ws://localhost:8080/subscribe");
    connection.onmessage = function (e) {
      setIssues((issues) => [...issues, JSON.parse(e.data)]);
      setMsgCount((count) => count + 1);
    };
    return connection;
  }

  useEffect(() => {
    fetch("http://localhost:8080/getlist/")
      .then((res) => res.json())
      .then((data) => setIssues(data.list));
    wsInit();
  }, []);

  return (
    <div className="table-container">
      <table>
        <tr>
          <th>Issue</th>
          <th>Comment</th>
          <th>Id</th>
          <th>Created</th>
        </tr>

        {issues &&
          issues.map((item, i) => (
            <tr key={i}>
              <td>{item.issue}</td>
              <td>{item.comment}</td>
              <td>{item.id}</td>
              <td>{item.createdDate}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};
export default Home;
