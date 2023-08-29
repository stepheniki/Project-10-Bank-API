import React from "react";
import '../style.css';

function Error() {
  return (
    <div className="error-container">
      <h1 className="error">Error 404</h1>
      <p className="error-text">Page not found</p>
      <a href="/"><button className="error-button">Back to Home</button></a>
    </div>
  );
}

export default Error;