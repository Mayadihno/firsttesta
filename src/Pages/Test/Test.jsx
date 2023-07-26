/* eslint-disable react/jsx-key */
import React from "react";
import "./Test.css";
import { Box, Button, Card, CardBody, Divider } from "@chakra-ui/react";
import { data } from "./testData";
const Test = () => {
  const sum = data.reduce((acc, value) => {
    return acc + Number.parseInt(value.price);
  }, 0);
  return (
    <React.Fragment>
      <div className="test">
        <div className="test__content">
          <div className="test__grid">
            <Card>
              <CardBody>
                <div className="card__body">
                  <h6>Recommended Test</h6>
                  <div className="card__test">
                    <div className="card__tests">
                      {data.map((items) => {
                        return (
                          <div className="item" key={items.id}>
                            <div className="items">
                              <h2>{items.test}</h2>
                              <div className="card__datas">
                                <p>N{items.price}</p>
                                <div className="buttonsss">
                                  {items.button === "Add" ? (
                                    <Button
                                      variant={"solid"}
                                      bg={"#347222"}
                                      color={"white"}
                                      width={"100px"}
                                      borderRadius={"20px"}
                                      _hover={"#347222"}
                                      size={"sm"}
                                    >
                                      {items.button}
                                    </Button>
                                  ) : (
                                    <Button
                                      variant={"solid"}
                                      bg={"#de7c5ef8"}
                                      _hover={"#de7c5ef8"}
                                      color={"white"}
                                      width={"100px"}
                                      borderRadius={"20px"}
                                      size={"sm"}
                                    >
                                      {items.button}
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="total">
                    <Divider borderWidth="2px" />
                    <div className="total__amount">
                      <h3>Total</h3>
                      <h5>N{sum.toLocaleString()}</h5>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
            <div className="payment">
              <h3>Payment Method</h3>
              <Box sx={{ display: "flex", columnGap: "20px" }}>
                <Button
                  variant={"solid"}
                  bg={"#EF3C03"}
                  _hover={"#EF3C03"}
                  color={"white"}
                  size={"sm"}
                  width={"80px"}
                >
                  Card
                </Button>
                <Button
                  variant={"solid"}
                  bg={"#EF3C03"}
                  color={"white"}
                  _hover={"#EF3C03"}
                  size={"sm"}
                >
                  Cash/Transfer
                </Button>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Test;
