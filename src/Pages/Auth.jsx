import React, { useState } from "react";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

const Auth = () => {
  const [show, setShow] = useState(true);
  return (
    <React.Fragment>
      <div className="auth">
        {show ? (
          <Login show={show} setShow={setShow} />
        ) : (
          <Signup show={show} setShow={setShow} />
        )}
      </div>
    </React.Fragment>
  );
};

export default Auth;
