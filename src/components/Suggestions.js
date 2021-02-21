import React from "react";
import { Div, Row, Col } from "react-atomize";
import SmallCard from "./SmallCard";

function Suggestions(props) {
  return (
    <Div>
    <Row size="auto" d="flex" p="0rem">
      <Col size="auto" p="0rem">
        <SmallCard
          title={props.data[0].title}
          img={props.data[0].img}
        />  
      </Col>
      <Col size="auto">
        <SmallCard
          title={props.data[1].title}
          img={props.data[1].img}
        />  
      </Col>
      <Col size="auto">
        <SmallCard
          title={props.data[2].title}
          img={props.data[2].img}
        />  
      </Col>
      <Col size="auto">
        <SmallCard
          title={props.data[3].title}
          img={props.data[3].img}
        />  
      </Col>
    </Row>
    </Div>
  );
}

export default Suggestions;