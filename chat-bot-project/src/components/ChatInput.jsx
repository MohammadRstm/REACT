import { useState} from 'react';
import {Chatbot} from 'supersimpledev';
import {useRef} from 'react';
import './componenetsCSS/ChatInput.css';
import { getCurrentTime } from '../Modules/currentTime';

export function ChatInput({setChatMessages}){
            const inputRef = useRef(null);

            const [inputText , setInputText] = useState('');
            const [typing , setTyping] = useState(true);// loading state to prevent from typing while loading

            function saveInputText(event){
                setInputText(event.target.value); 

            }

        async function  sendMessage(event){

            if (inputText !== '' && (event.type === 'click' || event.key === 'Enter')){// if enter is clicked or got here via send button
               setChatMessages(prev => [
                        ...prev,
                        {
                            message: inputText,
                            time : getCurrentTime(),
                            sender: 'user',
                            id: crypto.randomUUID()
                        }
                        ]);

                        setInputText('');

                        // Add "Loading..." message
                        const loadingId = crypto.randomUUID();
                        setTyping(false);
                        setChatMessages(prev => [
                        ...prev,
                        {
                            message: 'loading',
                            time : getCurrentTime(),
                            sender: 'bot',
                            id: loadingId
                        }
                        ]);

                        // Wait for response
                        const response = await Chatbot.getResponseAsync(inputText);
                        setTyping(true);
                        // Replace "Loading..." message with actual response
                        setChatMessages(prev =>
                            prev.map(msg =>
                                msg.id === loadingId
                                ? { ...msg, message: response }
                                : msg
                            )
                        );
                        setTimeout(() => {
                            inputRef.current?.focus();
                        }, 0);

                }else if (event.key === 'Esc' || event.key === 'Escape'){
                    setInputText('');
                }
            }

            function clearLocalStorage(){
                localStorage.removeItem('messages');
                window.location.reload();
            }

            return (
                <div className="input-container">
                    <input
                        ref = {inputRef}
                        className = "input-text"
                        size="30" 
                        placeholder="Send a message to ChatBot"
                        onChange = {saveInputText}
                        onKeyDown = {sendMessage}
                        value = {inputText}
                        disabled = {!typing}
                        
                     />
                    <button
                        onClick = {sendMessage}
                        className = "send-button"
                    >
                    Send
                    </button>
                    <button
                        onClick = {clearLocalStorage}
                        className = "clear-button"
                    >
                    Clear
                    </button>
                </div>
            );
}
