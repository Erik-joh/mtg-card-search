import React from "react";
import { Link } from "react-router-dom";

const FailedToLoad = ({ errorMsg, linkUrl, linkText }) => {
  return (
    <div>
      <h2>{errorMsg}</h2>
      <Link to={linkUrl}>{linkText}</Link>
    </div>
  );
};
export default FailedToLoad;
