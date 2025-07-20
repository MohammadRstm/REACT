import { ChatMessage } from './ChatMessage';
import './componenetsCSS/ChatMessages.css';
import { useAutoScroll } from '../Modules/autoScroll';



function ChatMessages({chatMessages}){ 

        const chatMessageContainer = useAutoScroll(chatMessages);

            
          return (
              <div className="messages-container"
               ref={chatMessageContainer}>
               {
                  chatMessages.map((chatMessage) => {
                    return ( 
                      <ChatMessage
                       message = {chatMessage.message}
                       sender = {chatMessage.sender}
                       key = {chatMessage.id}
                      />
                   );
                  })
                }
              </div>
            )
}

export default ChatMessages;
