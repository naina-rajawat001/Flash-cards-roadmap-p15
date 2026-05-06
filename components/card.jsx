import { useContext } from "react"
import { userContext } from "./mainbody.jsx"
import question from "../src/data.js"
import '../src/card.css'

export default function Card() {
    const {i, show} = useContext(userContext)

  return (
        <section className="card">
            <h2>Place:   {question[i].place}</h2>
            {
                show == true?  
                <>
                    <h2>Creepy part</h2>
                    <p>{question[i].creepy}</p>
                </>:
                <>
                    <p>{question[i].story}</p>
                    <p>click on show button to see creepy part of story</p>
                </>
          
            }
         
        </section>
    )
    
}