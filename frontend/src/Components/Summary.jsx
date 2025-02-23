import React from 'react';

function SummaryComponent({ summary }) {
  const formattedResponse = summary.split('\n').map((line, index) => (
    <div key={index}>{line}</div>
  ));
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title fs-1">Summary</h5>
          <p className="card-text fs-5">{formattedResponse}</p>
        </div>
      </div>
    </div>
  );
}

export default SummaryComponent;
