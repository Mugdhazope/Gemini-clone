import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();


//tempoary storage on the browser(cache, browser storgage)
const ContextProvider = (props) => {
//props is how react component recieves input from their parent comp

//for one by one line loading/typing effect:
//link the follwoing delay function to onSent function
    const delayPara = (index,nextWord) =>{
        setTimeout(function () {
            setResultData(prev=>prev+nextWord);
        },75*index)
    }


//new chat button, clears the screen 
    const newChat = () =>{
        setloading(false)
        setShowResult(false)
    }

    const onSent = async(prompt) =>{
        //because async function itt awaits

        //the following is flow of the event of the input to output process which has how and when a function is called



        //result dta will be reset and prev response will be removed
        setResultData("") 
        //loading animation in the screen
        setloading(true)
        //show result shows the result
        setShowResult(true)

        let response;


        //if wgetting any data in the parameter we will generate the response using prompt parameneter onSent, if not using input feild data:
        if(prompt !==undefined){
            response= await run(prompt)
            setRecentPrompt(prompt)
        }
        else{
            setPrevPrompts(prev=>[...prev,input])
            setRecentPrompt(input)
            response= await run(input)
        }
        



        setRecentPrompt(input)

        // //state variable - save previous prompt
        // //wheenevr called input will be stored -> that will be saves in sidebar in recent
        // setPrevPrompts(prev=>[...prev,input])

        //  //if we pass input in this then it runs whatever is the input and calls the answer from api
        // const response = await run(input) //comes from gemini.js file
        // //we arre getting the data using the run() function and displaying in console-> to display on screen we need to store the data in variable // and the respone will be stored in respone variable 
        // //we go to gemini.js


        //for bold tag
        let responseArray = response.split("**");
        let newResponse ="";
        for(let i =0; i<responseArray.length; i++){
            if(i===0 || i%2 !==1) {//even number
                newResponse += responseArray[i]

            }
            else{
                newResponse += "<b>" + responseArray[i] + "</b>"
            }
        }

        //adds new line/next line
        let newResponse2 = newResponse.split("*").join("</br>")
       //for typing effect:
       //(" ") this breaks the word
        let newResponseArray = newResponse2.split(" ");
        for(let i =0; i<newResponseArray.length; i++){
            const nextWord = newResponseArray[i];
            delayPara(i,nextWord+" ")
        }
        setloading(false)
        setInput("") //here the empty string is reset

       

    }
//state is for storing the state of current application -> login signup wont ask again and again if signed up or not, always wrote state in []
//input and setinput -> state i sbeing saved  


//stores user input in text for eg in search box
//setInput to update the value of input
    const [input, setInput] = useState("");
    //for every component different state

    //stores most recent prompt submitted
    const [recentPrompt, setRecentPrompt] =  useState("");

    //stored all previously submitted prompts 
    const [prevPrompts, setPrevPrompts] = useState([]);

    //shows if the response/ result should be displayed
    const [showResult, setShowResult] = useState(false);

    // tracks if app is loading data 
    const [loading,setloading] = useState(false);

    //stored result data 
    const [resultData, setResultData] = useState("");

//any variable or fn we can use anywhere in our porjext
    const contextValue = {
        //pass all the state variables
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat 

        //send all this to main.jsx 

    }

    return(
        <Context.Provider value={contextValue}>
            {props.children} 
            {/* contains any child elements passed between opening and closing tags */}
        </Context.Provider>
    )
     

}


export default ContextProvider;
