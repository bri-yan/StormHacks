import React from "react";
import { Div, Row, Col, Icon } from "react-atomize";
import Card from "./Card";
import FullCard from "./FullCard";
import LongCard from "./LongCard"

function Loading() {
  return (
    <Div>
        <FullCard
            text={<Icon name="Loading2" size="60px" />}
        />
            
        
    </Div>
  );
}

export default Loading;