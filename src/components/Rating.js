import React from "react";
import ProgressBar from 'react-customizable-progressbar';
import { Text } from "react-atomize"

function Rating(props) {
    return(
        <div className="circle-rating">
            <ProgressBar 
                radius={100}
                progress={props.rating}
                strokeWidth={4}
                trackStrokeWidth={4}
                pointerRadius={8}
                pointerStrokeWidth={5}
                strokeColor={props.color}
                pointerStrokeColor={props.color}
                counterClockwise>
                <div className="indicator">
                    <Text
                        textSize="display2"
                        textWeight="300"
                    >
                        {props.rating}
                    </Text>
                </div>
            </ProgressBar>
            <div className="circle-text">
            <Text
                textSize="title"
                textWeight="300"
            >
                {props.text}
            </Text>
            </div>
            
        </div>
    )
}

export default Rating;