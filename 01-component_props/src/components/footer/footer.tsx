import React, {FC} from "react";
interface Props{
    title:string,
    desc:string,
}
const Footer:FC<Props> = (props, context) => {
    return(
        <footer style={{
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
         <h4>{
             props.desc
         }</h4>
        </footer>
    )
}
export default Footer

