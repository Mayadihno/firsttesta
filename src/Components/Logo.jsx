import React from "react";
import "./Logo.css";
import { Button } from "@chakra-ui/react";
import { RiSettings5Fill } from "react-icons/ri";
import { useLocation } from "react-router-dom";
const Logo = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      <div className="logo">
        <h2>firsttesta</h2>
        {location.pathname === "/" ? (
          ""
        ) : (
          <div className="butons">
            <Button
              leftIcon={<RiSettings5Fill fontSize={25} fontWeight={400} />}
            >
              Settings
            </Button>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Logo;
