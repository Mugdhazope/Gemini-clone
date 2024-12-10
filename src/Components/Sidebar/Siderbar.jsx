import React, { useState } from 'react'
import './Sidebar.css';
import { assets } from '../../assets/assets'

const Siderbar = () => {
    //update the value of the extended state
     const[extended, setExtended] = useState(false)

  return (
    <div className='sidebar'>
        <div className='top'>
            {/* toggle logic */}
            <img onClick={()=>setExtended(prev=> !prev)}  className='menu' src={assets.menu_icon} alt="" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="" />
                {extended?<p>New Chat</p>: null}
            </div>

            {extended?
            //extended set
            //if true then show all the prev or show null

            <div className="recent">
                <p className='recent-title'>Recent</p>
                <div className='recent-entry'>
                    <img src={assets.message_icon} alt="" />
                    <p>What is react</p>
                </div>

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