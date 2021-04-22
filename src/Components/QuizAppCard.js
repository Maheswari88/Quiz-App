import myPic from '../assets/logo192.png'
import './QuizAppCard.css'

export default function QuizAppCard(){
    return (
        <div id="qc">
            <div id="qcbg">
               <h1>Quiz App</h1>
            </div>
            <img id="pp" src={myPic} alt='logo of my app'></img>

        </div>
    )
}