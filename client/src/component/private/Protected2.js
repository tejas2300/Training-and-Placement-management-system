import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { isAuth } from "../../action/authAcation";
const Protected2 = ({ history }) => {
  useEffect(() => {
    if (!isAuth()) {
      history.push("/signin");
    } else if (isAuth().role !== 1) {
      history.push("/");
    }
  }, []);
  return <div></div>;
};

export default withRouter(Protected2);
