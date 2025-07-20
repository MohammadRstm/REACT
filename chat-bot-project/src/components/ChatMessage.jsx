import bot_image from '../assets/robot.png'
import user_image from '../assets/user.png'
import loadingSpinner from '../assets/loading-spinner.gif';
import './componenetsCSS/ChatMessage.css';
import { getCurrentTime } from '../Modules/currentTime';

export function ChatMessage(props){

                return (
                    <div className= {props.sender == 'user' ? "user-message-container" : "bot-message-container"}>
                        {props.sender === "bot" && (
                            <img src= {bot_image} className="image-profile"></img>
                        )}
                        <div className ="chat-message-text">
                            {(props.message === 'loading')
                            ?
                            <img
                            className='loading-spinner'
                            src={loadingSpinner}
                            />
                            :
                            props.message
                            }
                            <p 
                            className='current-time-text'
                            >
                            {getCurrentTime()}
                            </p>
                        </div>
                        {props.sender === "user" && (
                            <img src= {user_image} className="image-profile"></img>
                        )}
                    </div>
                );
}
