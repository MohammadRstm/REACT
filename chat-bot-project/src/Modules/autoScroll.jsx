import {useEffect , useRef } from 'react';

export function useAutoScroll(dependencies){
      const chatMessageContainer = useRef(null);

      useEffect(() => {
          const messagesElem = chatMessageContainer.current;
          if (messagesElem){
            messagesElem.scrollTop = messagesElem.scrollHeight;
          }
        } , [dependencies]);

        return chatMessageContainer;
}