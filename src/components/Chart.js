import React from "react";
import {
    StyleReset,
    Div,
    Button,
    Text,
    Icon,
    Row,
    Col,
  } from "react-atomize";
import Rating from "./Rating"
import SmallRating from "./SmallRating"

function Chart(props) {
    return (
        <div className="rating-chart">
            <div className="company-name">
                <Text
                    textSize="display3"
                    textWeight="300"
                >
                    Company Name
                </Text>
            </div>
            <Col size="2">
                <Div p={{l:"1rem"}}>
                    <Rating rating={82} color="#1FB7EA" text="Fair Trade Rating"/> 
                </Div>
            </Col>
            <Col>
                <Row>
                    <SmallRating rating={67} color="#EF476F" text="Social Media Rating"/> 
                </Row>
                <Row>
                    <SmallRating rating={67} color="#FFD166" text="Positivity-Polarization Index"/> 
                </Row>
                <Row>
                    <SmallRating rating={67} color="#06D6A0" text="Sentiment & Awareness Score"/> 
                </Row>
            </Col>
            
        </div>
    )
}

export default Chart;