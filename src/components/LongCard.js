import React from "react";
import {
    StyleReset,
    Div,
    Button,
    Text,
    Icon
  } from "react-atomize";

function LongCard(props) {
    return (
        <Div p={{l:"2rem", t:"1rem"}} d="flex" flexDir="column">
            <StyleReset />
            <Div d="flex" m={{ b: "2rem" }}>
            <Div
                d="flex"
                rounded="cardRadius"
                shadow="2"    
            >
                <Div
                    w="26.6rem"
                    bg="white"
                    rounded={{tl:"cardRadius", bl:"cardRadius"}}
                    p={{l:"1rem", r:"1rem", b:"0.75rem", t: "0.6rem"}}
                >
                    <Text
                        textSize="title"
                        textWeight="600"
                        textAlign="left"
                        textColor="dark"
                        m={{l:"0.1rem"}}
                    >
                        {props.title}
                    </Text>
                    <Text
                        textSize="body"
                        textWeight="200"
                        textAlign="left"
                        textColor="dark"
                        m={{l:"0.1rem", t:"0.4rem"}}
                    >
                        {props.body}
                    </Text>
                    <Button
                        bg="info600"
                        hoverBg="info700"
                        suffix={
                        <Icon
                            name="LongRight"
                            size="16px"
                            color="white"
                            m={{ l: "1rem" }}
                        />
                        }
                        shadow="2"
                        hoverShadow="3"
                        m={{t:"0.6rem"}}
                    >
                        Continue Reading
                    </Button>
                </Div>
                <Div
                    w="29.7rem"
                    rounded={{tr:"cardRadius", br:"cardRadius"}}
                    bgImg={props.img}
                    bgSize="cover"
                    bgPos="center"
                    textColor="warning500"
                    p="1rem"
                >
                
                </Div>
            </Div>
            </Div>
        </Div>
    );
}

export default LongCard;
