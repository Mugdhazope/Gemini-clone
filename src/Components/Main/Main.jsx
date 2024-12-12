import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
  const {onSent,recentPrompt, showResult, loading, resultData, setInput, input}= useContext(Context)

  
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />

        </div>

      <div className="">

      {!showResult? //ternitary operator
      <> 
        <div className="greet">
        <p> <span> Hello, Mugdha.</span>
        </p>
        <p>How can I help you today?</p>
        </div>
        <div className="cards">
        <div className="card">
        <p>Suggest places to go to for a road trip</p>
        <img src={assets.compass_icon} alt="" />
        </div>
        <div className="card">
        <p>Summarise the concept: urban planning</p>
        <img src={assets.bulb_icon} alt="" />
        </div>
        <div className="card">
        <p>brainstorm team bonding activites at a workplace</p>
        <img src={assets.message_icon} alt="" />
        </div>
        <div className="card">
        <p>Give this code in a format</p>
        <img src={assets.code_icon} alt="" />
        </div> 
        </div>
      
      </>:<div className='result'>
        {/* to show the result on the screen */}
        <div className="result-title">
          <img src={assets.user_icon} alt="" />
          <p>{recentPrompt}</p>
        </div>
        <div className="result-data">
          <img src={assets.gemini_icon} alt="" />
           {loading? 
          <div className="loader">
            <hr />
            <hr />
            <hr />

          </div> :
          <p dangerouslySetInnerHTML={{__html:resultData}}></p> 
          }
          
          {/* react attribut to directly insert HTML content in DOM */}
          
        </div>

      </div>
      }
        

          <div className="main-bottom">
            <div className="search-box">

              {/* //in input state add onChange property -> onChange={(e)=setInput(e.target.value)}   */}
              <input onChange={(e) =>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
          

            <div>

            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />

            {/* here it calls the onSent function in Context.js to call api */}
            {input?
            <img onClick={()=>onSent()} src={assets.send_icon} alt="" />:
            null
            }

            

          </div>
        </div>
        <p className='bottom-info'>
          Gemini may display inaccurate info , including about people, so double-click its 
        </p>
      </div>
    </div>
    
  </div>


    
  )
}

export default Main