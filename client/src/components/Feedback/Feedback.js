import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./Feedback.scss";

const Feedback = () => {
  const [feedback, setFeedback] = useState({ issue: "", comment: "" });
  let history = useHistory();

  const handleSumbit = (event) => {
    event.preventDefault();
    if (feedback && feedback.issue && feedback.comment) {
      fetch("http://localhost:8080/save/", {
        method: "POST",
        body: JSON.stringify(feedback),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((json) => {
          setFeedback({ issue: "", comment: "" });
        });
      history.push("/");
    } else {
      alert("Please fill all required fields.");
    }
  };
  return (
    <div className="form-container">
      <form id="feedbackForm" onSubmit={handleSumbit}>
        <div className="issue-container">
          <input
            className="issue"
            name="issue"
            placeholder="Issue"
            value={feedback.issue}
            onChange={(event) => {
              setFeedback({ ...feedback, issue: event.target.value });
            }}
          ></input>
        </div>
        <div className="textarea-container">
          <textarea
            className="comment"
            name="comment"
            placeholder="Comment"
            value={feedback.comment}
            onChange={(event) => {
              setFeedback({ ...feedback, comment: event.target.value });
            }}
          ></textarea>
        </div>
        <div className="btn-container">
          <button type="submit">Add Issue</button>
        </div>
      </form>
    </div>
  );
};
export default Feedback;
