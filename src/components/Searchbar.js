import React from "react";
import { Input, Button, Icon, Div } from "react-atomize";

class SearchLoading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      value: ''
    };
  }

  render() {
    const { isLoading } = this.state;
    return (
        <Div
            w="60.4rem"
            p={{l:"2rem", r:"2rem", b:"2rem", t:"3rem"}}
        >
            <Input
            bg="white"
            textWeight="500"
            placeholder="Search a product and/or company"
            rounded="circle"
            onKeyPress={(e) => {
                if (e.key === "Enter") {
                    console.log(e.target.value);
                    this.setState({ isLoading: false });
                } else {
                    this.setState({ isLoading: true });
                }
            }}
            suffix={
            <Button
                pos="absolute"
                onClick={(e) => {
                        this.setState({ isLoading: !isLoading });
                        console.log(Input.e)
                    }
                }
                bg="transparent"
                w="3rem"
                top="0"
                right="0"
                rounded={{ r: "md" }}
            >
                <Icon
                name={isLoading ? "Loading" : "Search"}
                color={isLoading ? "gray900" : "black"}
                size="16px"
                />
            </Button>
            }
            />
        </Div>
    );
  }
}
export default SearchLoading;