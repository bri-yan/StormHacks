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
    const base = Math.round(props.scores.sas * 100 * 1.5)
    const sas = base + 31;
    const smr = Math.round(base * 1.5) + 14;
    const ppi = Math.round(base * 1.5) + 8;
    const ftr = Math.round((smr + ppi + sas) / 3);
    return (
        <div className="rating-chart">
            <div className="company-name">
                <Text
                    textSize="display3"
                    textWeight="300"
                    p={{l:"0rem", b:"1.8rem", r:"1rem"}}
                    m={{r:'10rem'}}
                >
                    Company: <Text textSize="display3"
                    textWeight="500">{props.company}</Text>
                </Text>
            </div>
            <Col size="3">
                <Div m={{l:"1rem", r:"6rem"}}>
                    <Rating rating={ftr} color="#1FB7EA" text="Fair Trade Rating"/> 
                </Div>
            </Col>
            <Col>
                <Div p={{b:"2.2rem"}}>
                    <Row>
                        <SmallRating rating={smr} color="#EF476F" text="Media Rating"/> 
                    </Row>
                    <Row>
                        <SmallRating rating={ppi} color="#FFD166" text="Positivity-Polarization Index"/> 
                    </Row>
                    <Row>
                        <SmallRating rating={sas} color="#06D6A0" text="Sentiment & Awareness Score"/> 
                    </Row>
                </Div>
            </Col>
        </div>
    )
}

export default Chart;