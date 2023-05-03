import React,{FC} from "react";
import {HeaderProps} from "../../types/interfaces/components/header/header.interface";

    const Header:FC<HeaderProps> = (props, context) => {
        return(
            <header style={{
                width:"100%",
                height:100,
                backgroundColor:"whitesmoke",
                borderColor:"black",
                borderWidth:"1px",
                borderStyle:"dashed",
                textAlign:"center"
            }}>
                <h3>
                    {
                        props.title
                    }
                </h3>
                <h4>
                    {
                        props.desc
                    }
                </h4>

            </header>
        )
    }

export default Header
