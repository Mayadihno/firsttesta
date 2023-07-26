/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import "./Home.css";
import { Card, CardBody } from "@chakra-ui/react";
import { data } from "./homeData";
import Complain from "../Complian/Complain";
const Home = () => {
  const [show, setShow] = useState(false);

  const handleClick = (id) => {
    id === 1 ? setShow(!show) : setShow(false);
  };
  return (
    <React.Fragment>
      <div className="home">
        <div className="home__content">
          <div className="home__grid">
            {data.map((datas) => {
              return (
                <Card
                  key={datas.id}
                  backgroundColor={datas.color}
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleClick(datas.id)}
                >
                  <CardBody>
                    <i> {<datas.icons fontSize={50} />}</i>
                    <h2>{datas.text}</h2>
                  </CardBody>
                </Card>
              );
            })}
          </div>
          {show && <Complain />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
