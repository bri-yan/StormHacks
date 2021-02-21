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
                    p={{l:"17rem", b:"1.8rem", r:"1rem"}}
                    m={{r:'10rem'}}
                >
                    Company: <Text textSize="display3"
                    textWeight="500">{props.company}</Text>
                </Text>
            </div>
            <Col size="2">
                <Div p={{l:"1rem"}}>
                    <Rating rating={props.ftr} color="#1FB7EA" text="Fair Trade Rating"/> 
                </Div>
            </Col>
            <Col>
                <Div p={{b:"2.2rem"}}>
                    <Row>
                        <SmallRating rating={props.smr} color="#EF476F" text="Social Media Rating"/> 
                    </Row>
                    <Row>
                        <SmallRating rating={props.ppi} color="#FFD166" text="Positivity-Polarization Index"/> 
                    </Row>
                    <Row>
                        <SmallRating rating={props.sas} color="#06D6A0" text="Sentiment & Awareness Score"/> 
                    </Row>
                </Div>
            </Col>
        </div>
    )
}

export default Chart;