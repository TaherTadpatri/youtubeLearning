import React, { useState } from "react";
import "./query.css"

function QueryComponent() {
  const [query, setQuery] = useState("");
  const [queryResponse, setQueryResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(false);
      setLoading(true);
      const response = await fetch('http://127.0.0.1:8000/QandA/', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question: query })
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const summary = data.response.message.content;
       setQueryResponse(summary)
      } else {
        setError('Failed to fetch response');
      }
    } catch (error) {
      setError('An error occurred');
    } finally {
      setLoading(false);
    }
  };
   
   
  return (
    <div >
      <h1>Ask any question</h1>
      <div className="container-query" >
        <input
          type="text"
          placeholder="Type your query here..."
          style={{
            width: "80%",
            padding: "10px",
            borderRadius: "5px 0 0 5px",
            border: "1px solid #ccc",
          }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="button"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "0 5px 5px 0",
          }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      {queryResponse && (
        <div className="accordion mt-3" id="queryResponses">
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading1">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
                aria-expanded="false"
                aria-controls="collapse1"
              >
                Query: {query}
              </button>
            </h2>
            <div
              id="collapse1"
              className="accordion-collapse collapse"
              aria-labelledby="heading1"
              data-bs-parent="#queryResponses"
            >
              <div className="accordion-body">{queryResponse}</div>
            </div>
          </div>
        </div>
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
      {error && <div>Error: {error}</div>}
    </div>
  );
}

export default QueryComponent;
