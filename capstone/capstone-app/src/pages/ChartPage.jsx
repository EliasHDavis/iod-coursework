import { useState } from "react"
import { useFetch } from "../useFetch"



export default function ChartPage() {

    const [key, handleChangeKey] = useState("Key")
    const [tempo, handleChangeTempo] = useState("Tempo")
    const [timeSig, handleChangeTimeSig] = useState("Time Signature")
    const [title, handleChangeTitle] = useState("Title")
    const [author, handleChangeAuthor] = useState("Author")

    //handle if user is loading data

    const handleAddRow = () => {
        //Add array to data
        return (
            <div className="chartRow" ></div>
        )
    }

    return (
        <div id="chartContainer">
           <div className='titleBar'>
                <div className="titleLeft">
                    <input type="text" value={key} onChange={(e)=>handleChangeKey(e.target.value)} />
                    <input type="text" value={tempo} onChange={(e)=>handleChangeTempo(e.target.value)} />
                    <input type="text" value={timeSig} onChange={(e)=>handleChangeTimeSig(e.target.value)} />
                </div>

                <div className="titleCenter">
                    <input type="text" value={title} onChange={(e)=>handleChangeTitle(e.target.value)} />
                    <p className="item">by</p>
                    <input type="text" value={author} onChange={(e)=>handleChangeAuthor(e.target.value)} />
                </div>
            </div>

        <div className="lower">

            <div className='uiBar'><h1>Hipe</h1></div>

            <div className='chart'>
                <div className='page'>
                    <div className='titleBar block'>
                        <div className="titleLeft">
                            <p className="item">{key}</p>
                            <p className="item">{tempo}</p>
                            <p className="item">{timeSig}</p>
                        </div>

                        <div className="titleCenter">
                            <h4 className="item">{title}</h4>
                            <p className="item">by</p>
                            <h4 className="item">{author}</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
           
        </div>
    )
}