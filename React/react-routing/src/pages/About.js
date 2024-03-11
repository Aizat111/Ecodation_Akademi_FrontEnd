import React from "react";
import { Link, useParams } from "react-router-dom";

export const About = () => {
  const params = useParams();
  //   console.log(params);
  return (
    <div>
      <h1>About</h1>
      <div className="row">
        <div className="col-3">
          <ul className="list-unstyled">
            <Link to={"/about/1"}>
              <li>About 1</li>
            </Link>
            <Link to={"/about/2"}>
              <li>About 2</li>
            </Link>
            <Link to={"/about/3"}>
              <li>About 3</li>
            </Link>
          </ul>
        </div>
        <div className="col-9">
          <h3>Page {params.id}</h3>
          {params.id == "1" ? (
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          ) : (
            <img src="data:image/jpeg;base64,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" />
          )}
        </div>
      </div>
    </div>
  );
};
