import { useState } from 'react';
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css';
import { useEffect } from 'react';
import {Chatbot} from 'supersimpledev';




function App() {

    let loadMessages = (localStorage.getItem('messages')) ? JSON.parse(localStorage.getItem('messages')) : []; 
     
    const [chatMessages ,setChatMessages] = useState(
                loadMessages
            );

    useEffect(() =>{
        Chatbot.addResponses({
            tellmewhatsmyname : 'Mohammad Rostom',
            wanttoplay : 'fek 3n ayre',
            yehello : "hello weer"
        });
    } , []);

    // save messages to local storage 
    useEffect(() =>{
        localStorage.setItem('messages' , JSON.stringify(chatMessages));
    } , [chatMessages]);
            

           return(
                <div className= "app-container">
                    {(chatMessages.length == 0 ) ?
                    <p
                    className='empty-message'
                    >
                     Welcome to the chat bot project! Send a message using the text box below.
                    </p>
                    :
                    ""
                    }
                    <ChatMessages
                        chatMessages = {chatMessages}
                        setChatMessages = {setChatMessages}
                    />
                    <ChatInput
                        chatMessages = {chatMessages}
                        setChatMessages = {setChatMessages}
                    />
                </div>
           );
}

export default App
