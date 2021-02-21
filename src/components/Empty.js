import React from "react";
import { Div, Row, Col } from "react-atomize";
import Card from "./Card";
import FullCard from "./FullCard";
import LongCard from "./LongCard"

function Empty() {
  return (
    <Div>
      <FullCard
        text="Try searching for a product/company above..."
      />
    </Div>
  );
}

export default Empty;