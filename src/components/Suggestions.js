import React from "react";
import { Div, Row, Col } from "react-atomize";
import SmallCard from "./SmallCard";
import LongCard from "./LongCard"

function Articles(props) {
  return (
    <Div>
    <Row size="auto" d="flex" p="0rem">
      <Col size="auto" p="0rem">
        <SmallCard
          title="Company Name"
          img="https://www.newhope.com/sites/newhope360.com/files/styles/article_featured_retina/public/FairTrade-Logo.svg__0.png?itok=RCPYoF2C"
        />  
      </Col>
      
    </Row>
    </Div>
  );
}

export default Articles;