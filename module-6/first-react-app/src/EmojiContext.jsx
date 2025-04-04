import { createContext, useState } from "react";

export const EmojiContext = createContext();

export const EmojiProvider = (props) => {
    const [currentEmoji, setCurrentEmoji] = useState({});

    const handleChangeEmoji = (emoji) => {
        setCurrentEmoji(emoji);
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