import React from "react";
import { Div, Row, Col } from "react-atomize";
import Card from "./Card";
import LongCard from "./LongCard"

function Articles(props) {
  return (
    <Div>
    <Row size="auto" d="flex" p="0rem">
      <Col size="auto" p="0rem">
        <Card
          title={props.data[0].title}
          body={props.data[0].summary}
          img={props.data[0].img}
        />  
      </Col>
      <Col size="auto">
        <Card
          title={props.data[1].title}
          body={props.data[1].summary}
          img={props.data[1].img}
        />  
      </Col>
      <Col size="auto">
        <Card
          title={props.data[2].title}
          body={props.data[2].summary}
          img={props.data[2].img}
        />  
      </Col>
      <Col size="auto">
        <Card
          title={props.data[3].title}
          body={props.data[3].summary}
          img={props.data[3].img}
        />  
      </Col>
    </Row>
    <Row size="auto" d="flex" p="0rem">
      <Col size="auto" p="0rem">
        <LongCard
          title={props.data[4].title}
          body={props.data[4].summary}
          img={props.data[4].img}
        />  
      </Col>
      <Col size="auto">
        <LongCard
          title={props.data[5].title}
          body={props.data[5].summary}
          img={props.data[5].img}
        />  
      </Col>
    </Row>
    </Div>
  );
}

export default Articles;