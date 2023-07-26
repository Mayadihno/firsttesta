/* eslint-disable react/jsx-key */
import { Button, Card, CardBody, Stack } from "@chakra-ui/react";
import React from "react";
import "./Question.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { data } from "./questionData";
import { useNavigate } from "react-router-dom";
const Questions = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="question">
        <div className="question__content">
          <div className="question__grid">
            <Card maxW={"md"} className="quest__card">
              <CardBody>
                <div className="length">
                  <p>1/10</p>
                  {data.map((item) => {
                    return <h3>{item.question}</h3>;
                  })}

                  {/* <h3>Do you have an itchy eye?</h3> */}

                  <Stack
                    direction="row"
                    spacing={4}
                    align="center"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      columnGap: "40px",
                    }}
                  >
                    <Button
                      variant="solid"
                      bgColor={"#EF3C03"}
                      width={"70px"}
                      color={"white"}
                      _hover={"#EF3C03"}
                    >
                      Yes
                    </Button>
                    <Button
                      variant="solid"
                      width={"70px"}
                      bgColor={"#EF3C03"}
                      _hover={"#EF3C03"}
                      color={"white"}
                    >
                      No
                    </Button>
                  </Stack>
                </div>
                <div className="position">
                  <div className="prev">
                    <IoIosArrowBack /> Previous
                  </div>
                  <div className="next">
                    Next
                    <i>
                      <IoIosArrowForward />
                    </i>
                  </div>
                </div>
              </CardBody>
            </Card>

            <div className="quest__btn">
              <Button
                bgColor={"#EF3C03"}
                _hover={"#EF3C03"}
                variant="solid"
                color={"white"}
                onClick={() => navigate("/test")}
              >
                Skip, Go to Test
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Questions;
