import React,{FC} from "react";
import {CardProps} from "../../types/interfaces/components/card/card.interface";

const Card:FC<CardProps> = (props, context) => {
    return(
        <div style={{
            width:200,
            height:400,
            backgroundColor:"whitesmoke",
            borderColor:"black",
            borderWidth:"1px",
            borderStyle:"dashed"
        }}>
            <h1>
                {
                    props.driverName + props.driverSurname
                }
            </h1>
            <h1>
                {
                    props.truckPlate
                }
            </h1>
        </div>
    )
}

export default Card
