import { Button } from '@material-ui/core';
import React from 'react'

function Popup(props) {
    return (props.trigger)?(
        <div className="popup">
            <div className="popup-inner ">
                {props.children}
                
                <Button
                    variant="outlined"
                    onClick={()=>props.setTrigger(false)}
                    className=""
                >cancel</Button>
            </div>
        </div>
    ):"";
}

export default Popup
