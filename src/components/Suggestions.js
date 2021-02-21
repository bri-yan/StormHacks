import React from "react";
import { Div, Row, Col } from "react-atomize";
import SmallCard from "./SmallCard";

function Suggestions(props) {
    const data = props.data;
    const cards = []
    if (data) {
        for (const x of data) {
            cards.push(<SmallCard
                title={x.title}
                img={x.img}
              />  )
        }
    } else {
        cards.push((<SmallCard
            title="No suggestions at the moment..."
            img="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2021/01/sorry-for-the-inconvenience.jpg"
          />))
        }
  return (
    <Div>
    <Row size="auto" d="flex" p="0rem">
        {cards}
    </Row>
    </Div>
  );
}

export default Suggestions;