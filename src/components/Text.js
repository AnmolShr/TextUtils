import React ,{useState}from 'react'

export default function TextArea(props){
    const onClick = ()=>{
        const newText = text.toUpperCase();
        setext(newText)
    }
    const onloClick = ()=>{
        const newText = text.toLocaleLowerCase();
        setext(newText)

    }
    const onChange = (event)=>{
        setext(event.target.value)
    }
    const clearClick = ()=>{
        const newText = ''
        setext(newText)

    }
    const [text,setext] = useState("")
    return(
        <>
        <div className="container" style={{color: props.mode==="dark"?"white":"rgb(5 34 63)"}}>
            <h1>{props.heading}</h1>
            <textarea className="form-control"style={{backgroundColor: props.mode==="dark"?"rgba(33,37,41)": "white", color: props.mode==="dark"?"white":"rgb(5 34 63)"}} onChange={onChange}value={text}id="myBox" rows="8"></textarea>
        </div>
            <button className="btn btn-primary my-3 mx-2" onClick={onClick}>Convert to Uppercase</button>
            <button className="btn btn-primary my-3" onClick={onloClick}>Convert to LowerCase</button>
            <button className="btn btn-primary my-3 mx-2" onClick={clearClick}>Clear Text</button>
        <div className="container" style={{color: props.mode==="dark"?"white":"rgb(5 34 63)"}}>
            <h1 className="my-2">Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        
        </>

    )
}