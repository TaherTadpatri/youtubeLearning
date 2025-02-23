import React, { useState } from "react";
import "./ass.css";

function Assessment({ summary }) {
  if (summary == "") {
    return (
      <div>
        <div class="alert alert-warning" role="alert">
          <h3>Complete reading first</h3>
        </div>
      </div>
    );
  }
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");
  const [assessment, setAssessment] = useState([]);
  const [generatedquiz, setgeneration] = useState(false);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = () => {
    let totalScore = 0;
    assessment.forEach((questionObj, index) => {
      const selectedOption = document.querySelector(
        `input[name="question${index}"]:checked`
      );
      if (selectedOption && selectedOption.value === questionObj.answer) {
        totalScore++;
      }
    });
    setScore(totalScore);
    setSubmitted(true);
  };

  const generateQuiz = async () => {
    try {
      setloading(true);
      const response = await fetch("http://127.0.0.1:8000/assessment/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ summary: summary }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setAssessment(data.questions);
        setloading(false);
        setgeneration(true);
      } else {
        setError("Failed to fetch summary data");
        setloading(false);
      }
    } catch (error) {
      console.error("Error fetching summary:", error);
      setError('Failed to tech error')
      setloading(false);
    } finally {
      setloading(false);
    }
  };

  return (
    <div>
      { !generatedquiz && (
        <button className="btn btn-primary " onClick={generateQuiz}>
          generate quiz
        </button>
      )}

      {loading && (
        <div className="spinner-container">
          <div
            className="spinner-border"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

     <div>
  {assessment && (
    <div>
      {assessment.map((questionObj, index) => (
        <div
          key={index}
          className="card mb-4 d-flex align-items-center align-content-center"
        >
          <h4 className="list-question">{questionObj.question}</h4>
          <ul>
            {questionObj.options.map((option, optionIndex) => (
              <li key={optionIndex} className="list-options">
                <label>
                  <input
                    type="radio"
                    name={`question${index}`}
                    value={option}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button
        className="btn btn-primary"
        onClick={handleSubmit}
        disabled={submitted} 
      >
        Submit
      </button>
    </div>
  )}
  {submitted && (
    <div>
      <h3>Your score: {score}</h3>
    </div>
  )}
</div>

    </div>
  );
}

export default Assessment;
