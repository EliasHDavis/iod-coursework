import { useState, useContext, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import { useQuery } from "../useQuery"
import "../Styles/Chart.css"
import { ChartContext, ChartProvider } from "../ChartContext"
import { UserContext, UserProvider } from "../UserContext"



export default function ChartPage() {

    const {user} = useContext(UserContext)
    const {chartId} = useContext(ChartContext)

    const [key, setChangeKey] = useState("Key")
    const [tempo, setChangeTempo] = useState("Tempo")
    const [timeSig, setChangeTimeSig] = useState("Time Signature")
    const [title, setChangeTitle] = useState("Title")
    const [author, setChangeAuthor] = useState("Author")

    const [rows, setRows] = useState([])
    const [headers, setHeaders] = useState([])

    const [requestConfig, setRequestConfig] = useState({
        url: '',
        options: {}
    });
    const {loading, error, data} = useQuery(requestConfig)

    const handleAddHeader = () => {
        const newHeader = { id: uuidv4(), value: "" }
        setHeaders(headers => [...headers, newHeader])
    }

    const handleHeaderChange = (index, newValue) => {
        const updatedHeader = [...headers];
        updatedHeader[index].value = newValue;
        setHeaders(updatedHeader);
        console.log(headers)
    };

    const handleAddRow = () => {
        const newRow = { id: uuidv4(), value: "" }
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
                    ownerId: user,
                    header: { key: key, tempo: tempo, timeSig: timeSig, title: title, author: author },
                    sectioning: headers, 
                    body: rows 
                }
         if(chartId) {
            setRequestConfig({
                url: `http://localhost:8080/api/charts/${chartId._id}`,
                options: {
                    method: "PUT",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(payload)
                }
            }) 
         } else {
            setRequestConfig({
                url: "http://localhost:8080/api/charts/create",
                options: {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(payload)
                }
            }) 
        } 
    }

    useEffect(() => {
        console.log(chartId)
        if (chartId) {
            setChangeKey(chartId.header.key)
            setChangeTempo(chartId.header.tempo)
            setChangeTimeSig(chartId.header.timeSig)
            setChangeTitle(chartId.header.title)
            setChangeAuthor(chartId.header.author)
            setHeaders(chartId.sectioning)
            setRows(chartId.body)
        }
    }, [chartId]);

    useEffect(() => {
        if (data?.data) {
            console.log("Chart Saved successfully: ", data.data);
        } else if (error) {
            console.error("Chart failed to save: ", error);
        }
        }, [data, error]);

    return (
        <div id="chartContainer">
           <div className='titleBar'>
                <div className="titleLeft">
                    <input type="text" value={key} onChange={(e)=>setChangeKey(e.target.value)} />
                    <input type="text" value={tempo} onChange={(e)=>setChangeTempo(e.target.value)} />
                    <input type="text" value={timeSig} onChange={(e)=>setChangeTimeSig(e.target.value)} />
                </div>

                <div className="titleCenter">
                    <input type="text" value={title} onChange={(e)=>setChangeTitle(e.target.value)} />
                    <p className="item">by</p>
                    <input type="text" value={author} onChange={(e)=>setChangeAuthor(e.target.value)} />
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