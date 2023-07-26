/* eslint-disable react/prop-types */
import { Button, Card, CardBody, Input } from "@chakra-ui/react";
import React from "react";

const Signup = ({ show, setShow }) => {
  return (
    <React.Fragment>
      <div className="signup login">
        <div className="signup__content">
          <Card maxW="md" className="card__login">
            <h3>New Customer Registration</h3>
            <CardBody>
              <form>
                <div className="input1">
                  <Input type="text" placeholder="Customers Name" size="lg" />
                </div>
                <div className="input2">
                  <Input
                    type="email"
                    placeholder="Customers Email Address"
                    size="lg"
                    required
                  />
                </div>
                <div className="input2">
                  <Input
                    type="tel"
                    placeholder="Customers Phone Number"
                    size="lg"
                    required
                  />
                </div>
                <div className="input2">
                  <Input
                    type="password"
                    placeholder="Enter Password"
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
                    Sign up
                  </Button>
                </div>
              </form>
              <div className="forget">
                <p>forget password?</p>
                <p onClick={() => setShow(!show)}>sign in</p>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
