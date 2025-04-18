import { Link } from "react-router-dom"
import resume from "../assets/Jacob_Peterson_Resume_Web-1.png"

export default function Resume() {
    return (
        <section className="p-5 d-flex flex-column align-items-center">
            <div className="bg-secondary-subtle rounded p-5 text-center">
               <div className="resume">
                    <img src={resume} alt="an image of my resume" />
               </div>
                <button><Link to='../assets/Jacob_Peterson_Resume_Web.pdf' target="_blank" download>Download</Link></button>
            </div>
        </section>
    )
}