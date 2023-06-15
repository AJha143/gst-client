import React, { useEffect } from "react";

const NotFoundPage = ({ handleNotFound }) => {
  useEffect(() => {
    handleNotFound();
  }, [handleNotFound]);

  return <h1>Page Not Found</h1>;
};

export default NotFoundPage;
