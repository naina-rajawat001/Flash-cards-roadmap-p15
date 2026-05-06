import { useState, createContext, useContext} from 'react'
import Card from "./card.jsx";
import FooterBtn from "./footer.jsx";
import Header from "./header.jsx";
import question from '../src/data.js';
import '../src/App.css'

export const userContext = createContext()
                                                        
export default function Mainbody() {

    const [i, setI] = useState(0)
    const [show, setShow] = useState("false")

    function next() {

        setI(prevI => ( prevI < (question.length-1)? prevI+1 : (question.length-1) ))
    
    }

    function previous() {

        setI(prevI => (prevI > 0 ? prevI - 1 : 0))

    }

    function showHideFn() {

        setShow(prev => (!prev))
        console.log(show)

    }

    return(

        <>
            <userContext.Provider value={{i, next, previous, showHideFn, show}}>
                <h2>Flash Cards</h2>
                <Header />
                <section className="main">
                    <Card />
                    <FooterBtn />
                </section>
            </userContext.Provider>
      
        </>

    )
    
}