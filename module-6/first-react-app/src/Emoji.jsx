import { useState } from "react"

export function Emoji(props) {
    const [face, setFace] = useState('smiley')

    const handleChangeFace = () => {
        face === 'smiley' ? setFace('sad') : setFace('smiley')
    }

    return (
        <div>
            Current Mood: {face}
            <img src={face === 'smiley' ? './public/smiley-face-emoji-png.png' : './public/stick-sad.png'}/>
            <button onClick={handleChangeFace}>Change Mood</button>
        </div>
    )
}