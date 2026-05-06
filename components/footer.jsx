import React, { useState, createContext, useContext} from 'react'
import { userContext } from '../components/mainbody.jsx'
import question from '../src/data'
import '../src/footer.css'

export default function FooterBtn () {
    const {i, previous, next, showHideFn, show}= useContext(userContext)
    
    return (
        <>
            <footer role="buttons" className="footer"> 
                
                <button onClick={previous} index = {i}><i className="fa-solid fa-angle-left"></i>Previous</button>
                <button index = {i} onClick={showHideFn}>{ show == true ? "hide" : "show"}</button>
                <button onClick={next} index = {i} >Next <i className="fa-solid fa-angle-right"></i></button>

            </footer>
          
        </>
    )
}                                                