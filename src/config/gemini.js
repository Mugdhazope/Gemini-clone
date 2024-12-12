

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
// import { response } from "express";
  
  const apiKey = "AIzaSyC-_-pWgHdb8jsQ8wHXi9VqtD4vARXeiNI";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  //add prompt at  run for user input
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });

    
    const result = await chatSession.sendMessage(prompt); //user input is here -> we replace it with prompt
    console.log(result.response.text())
    return result.response.text();

    // return response.text(); //return the respone text

  }
  
  export default run; //remove paranthesis and for the function to run in our project we add 'export default' ato the function and remove the ()