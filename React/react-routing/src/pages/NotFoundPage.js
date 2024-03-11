import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="d-flex flex-column hustify-content-center align-items-center mt-5">
      <h1>Page Not Found</h1>
      <Link to="home">
        <button className="btn btn-secondary">Go To Homepage</button>
      </Link>
    </div>
  );
};
