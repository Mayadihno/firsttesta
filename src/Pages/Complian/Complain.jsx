import { Button, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import "./Complain.css";
import { useNavigate } from "react-router-dom";
const Complain = () => {
  const [change, setChange] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/questions");
  };

  return (
    <React.Fragment>
      <div className="complain">
        <div className="complain__content">
          <form onSubmit={handleSubmit}>
            <Select
              placeholder="What is  your major complaint?"
              size="lg"
              bg={"#EF3C03"}
              color={"white"}
              focusBorderColor="transparent"
              onChange={(e) => setChange(e.target.value)}
            >
              <option style={{ color: "black" }} value="headache">
                Headache
              </option>
              <option style={{ color: "black" }} value="stomachache">
                Stomach ache
              </option>
              <option style={{ color: "black" }} value="toothache">
                Tooth ache
              </option>
              <option style={{ color: "black" }} value="eyeache">
                Eye ache
              </option>
            </Select>

            <div className="complain__button">
              {change === "" ? (
                <Button
                  variant={"outline"}
                  color={"#EF3C03"}
                  colorScheme="#EF3C03"
                >
                  Submit
                </Button>
              ) : (
                <Button
                  variant={"outline"}
                  color={"green"}
                  colorScheme="#EF3C03"
                  type="submit"
                >
                  Submit
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Complain;
