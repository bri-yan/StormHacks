import React from "react";
import ProgressBar from 'react-customizable-progressbar';
import { Text } from "react-atomize"

function SmallRating(props) {
    return(
        <div>
            <div className="small-circle-rating">
            <ProgressBar 
                radius={23.7}
                progress={props.rating}
                strokeWidth={4}
                trackStrokeWidth={4}
                pointerRadius={8}
                pointerStrokeWidth={5}
                strokeColor={props.color}
                pointerStrokeColor={props.color}
                counterClockwise>
                <div className="small-indicator">
                    <Text
                        textSize="subheader"
                        textWeight="300"
                    >
                        {props.rating}
                    </Text>
                </div>
            </ProgressBar>
            <div className="small-circle-text">
            <Text
                textWeight="300"
                p={{l:"10"}}
            >
                {props.text}
            </Text>
            </div>
            
        </div>
        </div>
        
    )
}

export default SmallRating;