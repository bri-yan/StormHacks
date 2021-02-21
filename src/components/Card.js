import React from "react";
import {
    StyleReset,
    Div,
    Button,
    Text,
    Icon
  } from "react-atomize";

function Card(props) {
    return (
        <Div p={{l:"2rem", t:"1rem"}} d="flex" flexDir="column">
            <StyleReset />
            <Div d="flex" m={{ b: "2rem" }}>
            <Div
                rounded="cardRadius"
                shadow="2"    
            >
                <Div
                    h="13rem"
                    w="26.65rem"
                    rounded={{tl:"cardRadius", tr:"cardRadius"}}
                    bgImg={props.img}
                    bgSize="cover"
                    bgPos="center"
                    textColor="warning500"
                    p="1rem"
                >
                    <Button
                        prefix={
                        <Icon
                            name="Alert"
                            size="16px"
                            color="white"
                            m={{ r: "0.5rem" }}
                        />
                        }
                        bg="warning700"
                        hoverBg="warning800"
                        rounded="circle"
                        p={{ r: "1.5rem", l: "1rem" }}
                        shadow="3"
                        hoverShadow="4"
                        cursor="default"
                    >
                       Lorem Ipsum
                    </Button>
                </Div>
                <Div
                    w="26.65rem"
                    bg="white"
                    rounded={{bl:"cardRadius", br:"cardRadius"}}
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
            </Div>
            </Div>
        </Div>
    );
}

export default Card;
