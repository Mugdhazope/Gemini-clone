import { createContext } from "react";
import run from "../config/gemini";

export const Context = createContext();



const ContextProvider = (props) => {
//props is how react component recieves input from their parent comp

    const onSent = async(prompt) =>{
        //because async function itt awaits
       await run(prompt) //comes from gemini.js file
    }

    onSent("what is react js");

//any variable or fn we can use anywhere in our porjext
    const contextValue = {

    }

    return(
        <Context.Provider value={contextValue}>
            {props.children} 
            {/* contains any child elements passed between opening and closing tags */}
        </Context.Provider>
    )
     

}


export default ContextProvider;
