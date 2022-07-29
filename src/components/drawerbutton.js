import React from 'react';
import '../index.css';
import {MdArrowForwardIos} from 'react-icons/md';

export default function DrawerButton(props){
    return (
        <div className="DrawerButton">
            <div className="InsideDraawer">
                {props.text}<MdArrowForwardIos/>
            </div>
        </div>
    );
}