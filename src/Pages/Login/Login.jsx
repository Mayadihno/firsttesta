/* eslint-disable react/prop-types */
import React from "react";
import { Button, Card, CardBody } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = ({ show, setShow }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/home", { replace: true });
  };
  return (
    <React.Fragment>
      <div className="login">
        <div className="login__content">
          <div className="login__grid">
            <Card maxW="md" className="card__login">
              <h3>Log in</h3>
              <CardBody>
                <form onSubmit={handleSubmit}>
                  <div className="input1">
                    <Input
                      type="email"
                      placeholder="Enter your Email Address"
                      size="lg"
                      required
                    />
                  </div>
                  <div className="input2">
                    <Input
                      type="password"
                      placeholder="Enter your Password"
                      size="lg"
                      required
                    />
                  </div>
                  <div className="button">
                    <Button
                      variant={"solid"}
                      bgColor={"#EF3C03"}
                      color={"white"}
                      size="md"
                      width={"410px"}
                      type="submit"
                    >
                      Sign in
                    </Button>
                  </div>
                </form>
                <div className="forget">
                  <p>forget password?</p>
                  <p onClick={() => setShow(!show)}>sign up</p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
