import React from "react";
import {
    StyleReset,
    Div,
    Button,
    Text,
    Icon
  } from "react-atomize";

function FullCard(props) {
    return (
        <Div p={{l:"2rem", t:"1rem"}} d="flex" flexDir="column" align="center">
            <StyleReset />
            <Div d="flex" m={{ b: "2rem" }} align="center">
            <Div
                rounded="cardRadius"   
            >
                <Div
                    h="25rem"
                    w="40rem"
                    rounded={{tl:"cardRadius", tr:"cardRadius"}}
                    bgImg={props.img}
                    bgSize="cover"
                    bgPos="center"
                    textColor="black"
                    textAlign="center"
                    p={{r:"2rem", t: "10rem"}}
                    textSize="title"
                    textWeight="100"
                >
                    {props.text}
                </Div>
               
            </Div>
            </Div>
        </Div>
    );
}

export default FullCard;
