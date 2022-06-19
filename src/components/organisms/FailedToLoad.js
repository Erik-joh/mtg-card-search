import React from "react";
import { Link } from "react-router-dom";
import { FailedToLoadContainer } from "../pages/ResultsPage/styles";
import { Button } from "../pages/SearchPage/styles";

const FailedToLoad = ({ errorMsg, linkUrl, linkText, onLinkClick }) => {
  return (
    <FailedToLoadContainer>
      <h1>{errorMsg}</h1>
      <Button>
        <Link onClick={onLinkClick} to={linkUrl}>
          {linkText}
        </Link>
      </Button>
    </FailedToLoadContainer>
  );
};
export default FailedToLoad;
