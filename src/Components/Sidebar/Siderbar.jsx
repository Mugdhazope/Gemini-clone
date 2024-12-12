import React, { useContext, useState } from 'react'
import './Sidebar.css';
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';

const Siderbar = () => {
    //update the value of the extended state
     const[extended, setExtended] = useState(false)
     //state variable and function using context.api:
     const {onSent, prevPrompts, setRecentPrompt,newChat} = useContext(Context)

     // to save prev prompt entry's respone
     const loadPrompt = async(prompt) =>{
        setRecentPrompt(prompt)
        await onSent(prompt)
     }
     //we need to need link this above - setRecentPrompt(prompt) using "recent-entry"


  return (
    <div className='sidebar'>
        <div className='top'>
            {/* toggle logic */}
            <img onClick={()=>setExtended(prev=> !prev)}  className='menu' src={assets.menu_icon} alt="" />
            <div onClick={()=>newChat()} className="new-chat">
                <img src={assets.plus_icon} alt="" />
                {extended?<p>New Chat</p>: null}
            </div>

            {extended?
            //extended set
            //if true then show all the prev or show null

            <div className="recent">
                <p className='recent-title'>Recent</p>
                {/* to save previous prompts in recent section on sidebar */}
                {prevPrompts.map((item,index)=>{
                    return(
                                <div onClick={()=>loadPrompt(item)} className='recent-entry'>
                                <img src={assets.message_icon} alt="" />
                                <p>{item.slice(0,18)}...</p>
                                {/* ... is used for spread */}
                            </div>

                    )

                })
                }
               

            </div>
            :null}

        </div>

        
        <div className='bottom'>
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended?<p>Activity</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.send_icon} alt="" />
                {extended?<p>Setting</p>:null}
            </div>
        

            
        </div>
    </div>
  )
}

export default Siderbar