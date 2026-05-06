import React, { useContext } from 'react'
import { userContext } from '../components/mainbody.jsx'
import '../src/header.css'
import question from "../src/data.js"

export default function Header () {
    const {i, show} = useContext(userContext)
    const progress = `${(100 / question.length) * i + 1}`


    const progressStyling = {
        width: `${progress}%`, 
        maxWidth:'81%',
        backgroundColor: "#657868",
        borderRadius: "6px",
        color: "#657868",
        padding: "10px"

    }

    return (
        <>
            <div className="headerdiv"> 
                <div className="progress" style={progressStyling}>g</div>
                <p>{i+1} of {question.length}</p>
            </div>
        </>
    )
}
// 