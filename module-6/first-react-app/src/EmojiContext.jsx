import { createContext, useContext, useState } from "react";


export const EmojiContext = createContext();

export const EmojiProvider = (props) => {
    const [currentEmoji, setCurrentEmoji] = useState('smiley');

    const handleChangeEmoji = () => {
        currentEmoji === 'smiley' ? setCurrentEmoji('sad') : setCurrentEmoji('smiley');
    }

    return (
        <EmojiContext.Provider value={{currentEmoji, handleChangeEmoji}} >
            {props.children}
        </EmojiContext.Provider>
    );
}

export const useEmojiContext = () => {
    return useContext(EmojiContext);
}