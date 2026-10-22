import { useState } from "react"
import './AlertCard.css'

export const AlertCard = ({result, children}) => {
    
    const [show, setShow] = useState(true);

  return (
    <div className={show ? "" : "hidden"}>
        <div className={`box ${result}`}>
            {children}
        </div>
        <button onClick={() => setShow(!show)} className='trigger'>Hide</button>
    </div>
    )
}
