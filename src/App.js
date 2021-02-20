import React from "react";
import Endpoint from "./Endpoint"
import {
  ThemeProvider,
  DefaultTheme,
  StyleReset,
  Div,
  Button,
  Text,
  Icon
} from "react-atomize";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    brand800: "#671de1"
  },
  rounded: {
    ...DefaultTheme.rounded,
    brandRadius: "20px"
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Div p="1rem" d="flex" flexDir="column">
        <StyleReset />
        <Div d="flex" m={{ b: "4rem" }}>
          <Div
            h="6rem"
            w="5.5rem"
            m={{ r: "1rem" }}
            rounded="brandRadius"
            bg="brand800"
          />
          <Div
            h="6rem"
            w="5.5rem"
            m={{ r: "1rem" }}
            rounded="brandRadius"
            bg="info700"
          />
          <Div
            h="6rem"
            w="5.5rem"
            m={{ r: "1rem" }}
            rounded="brandRadius"
            bg="success700"
          />
          <Div
            h="6rem"
            w="5.5rem"
            m={{ r: "1rem" }}
            rounded="brandRadius"
            bg="warning700"
          />
          <Div
            h="6rem"
            w="5.5rem"
            m={{ r: "1rem" }}
            rounded="brandRadius"
            bg="danger700"
          />
        </Div>

        <Text m={{ b: "0.5rem" }}>Brand Buttons</Text>
        <Div d="flex" m={{ b: "2rem" }}>
          <Div m={{ r: "1rem" }}>
            <Button
              bg="brand800"
              rounded="brandRadius"
              m={{ b: "0.5rem" }}
              p={{ x: "1.5rem" }}
            >
              Submit
            </Button>
            <Button
              bg="brand800"
              rounded="brandRadius"
              h="2.5rem"
              justify="space-between"
              suffix={
                <Icon name="Plus" size="20px" color="white" m={{ l: "2rem" }} />
              }
              m={{ b: "0.5rem" }}
            >
              Follow
            </Button>
            <Button
              bg="brand800"
              shadow="4"
              rounded="brandRadius"
              m={{ b: "0.5rem" }}
              p={{ x: "2rem" }}
              h="3rem"
            >
              Large Button
            </Button>
          </Div>
          <Div m={{ r: "1rem" }}>
            <Button
              bg="white"
              border="1px solid"
              borderColor="brand800"
              textColor="brand800"
              textWeight="600"
              rounded="brandRadius"
              m={{ b: "0.5rem" }}
              p={{ x: "1.5rem" }}
            >
              Submit
            </Button>
            <Button
              bg="white"
              border="1px solid"
              borderColor="brand800"
              textColor="brand800"
              textWeight="600"
              rounded="brandRadius"
              h="2.5rem"
              justify="space-between"
              suffix={
                <Icon
                  name="Plus"
                  size="20px"
                  color="brand800"
                  m={{ l: "2rem" }}
                />
              }
              m={{ b: "0.5rem" }}
            >
              Follow
            </Button>
            <Button
              bg="white"
              border="1px solid"
              borderColor="gray300"
              shadow="4"
              textColor="brand800"
              textWeight="600"
              rounded="brandRadius"
              m={{ b: "0.5rem" }}
              p={{ x: "2rem" }}
              h="3rem"
            >
              Large Button
            </Button>
          </Div>
          <Div>
            <Button
              w="2.5rem"
              bg="brand800"
              m={{ b: "0.5rem" }}
              rounded="brandRadius"
              suffix={<Icon name="Heart" size="20px" color="white" />}
            />
            <Button
              w="2.5rem"
              bg="white"
              border="1px solid"
              borderColor="brand800"
              m={{ b: "0.5rem" }}
              rounded="brandRadius"
              suffix={<Icon name="Edit" size="20px" color="brand800" />}
            />
            <Button
              h="3rem"
              w="3rem"
              bg="white"
              border="1px solid"
              borderColor="gray300"
              shadow="4"
              rounded="brandRadius"
              suffix={<Icon name="HeartSolid" size="20px" color="brand800" />}
            />
          </Div>
        </Div>
      </Div>
      <Endpoint/>
    </ThemeProvider>
  );
}

export default App;