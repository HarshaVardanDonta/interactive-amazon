 import '../index.css';
 import React from 'react'
import ReactDOM from 'react-dom'


 export default function Text(props){
    return(
        <div className="Header2Buttons">
            <dix className="Header2ButtonLeading">
                {props.Leading}
            </dix>
            {props.Text}
            <div className="Header2ButtonTrail">
                {props.Trailing}
            </div>
            
        </div>
    );
}