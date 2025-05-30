import { useState } from "react"
import { useQuery } from "../useQuery"
import "../Styles/Chart.css"


export default function ChartPage() {

    const [key, handleChangeKey] = useState("Key")
    const [tempo, handleChangeTempo] = useState("Tempo")
    const [timeSig, handleChangeTimeSig] = useState("Time Signature")
    const [title, handleChangeTitle] = useState("Title")
    const [author, handleChangeAuthor] = useState("Author")

    const [rows, setRows] = useState([])
    const [headers, setHeaders] = useState([])

    const [url, setUrl] = useState('')
    const [options, setOptions] = useState('')
    const {loading, error, data} = useQuery(url, options)

    //handle if user is loading data or have seperate page and make components to fill each

    const handleAddHeader = () => {
        const newHeader = { id: Date.now(), value: "" }
        setHeaders(headers => [...headers, newHeader])
    }

    const handleHeaderChange = (index, newValue) => {
        const updatedHeader = [...headers];
        updatedHeader[index].value = newValue;
        setHeaders(updatedHeader);
        console.log(headers)
    };

    const handleAddRow = () => {
        //Add array to data
        const newRow = { id: Date.now(), value: "" }
        setRows(rows => [...rows, newRow])
    }

    const handleRowChange = (index, newValue) => {
        const updatedRow = [...rows];
        updatedRow[index].value = newValue;
        setRows(updatedRow);
        console.log(rows)
    };


    const handleSaveChart = () => {
        const payload = { 
                    header: { key: key, tempo: tempo, timeSig: timeSig, title: title, author: author },
                    sectioning: headers, 
                    body: rows 
                }
        setUrl("http://localhost:8080/api/charts/create"),
        setOptions({
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload)
            })
    } 
    

    return (
        <div id="chartContainer">
            {/* Title section and page header */}
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
        
        {/* Everything below title */}
        <div className="lower">

            {/* User Interface Buttons */}
            <div className='uiBar'>
                <h1 onClick={handleSaveChart}>Save</h1>
                <div className="uiButtonContainer" onClick={null}>blue</div>
                <div className="uiButtonContainer" onClick={null}>brown</div>
                <div className="uiButtonContainer" onClick={null}>black</div>
            </div>

            {/* Smaller version of title on the actual chart */}
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
                    {/* Start of the chart body */}
                    <div className="chartBody">
                        <div className="chartHeaders">
                            {headers.map((header, index) => (
                                <div key={header.id} className="chartHeader">
                                    <input
                                        type="text"
                                        value={header.value}
                                        onChange={(e) => handleHeaderChange(index, e.target.value)}
                                        placeholder="..."
                                    />
                                </div>
                            ))}
                            <button className="addButton" onClick={handleAddHeader}>+</button>
                        </div>

                        <div className="chartRowContainer"> 
                                {rows.map((row, index) => (
                                    <div key={row.id} className="chartRow">
                                        <input
                                            type="text"
                                            value={row.value}
                                            onChange={(e) => handleRowChange(index, e.target.value)}
                                            placeholder="..."
                                        />
                                    </div>
                                ))}
                            <button className="addButton" onClick={handleAddRow}>+</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
           
        </div>
    )
}