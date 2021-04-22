import {useState,useRef} from 'react';
import './quiz.css'
import {quizData} from './quizData'
import { Button} from 'antd';
export default function Quiz(){

   // eslint-disable-next-line
    // create currentQuestion as a statevariable
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const[showScore,setShowScore]= useState(false);
    const[score,setScore]= useState(0);
    //const[disabled,setDisabled]=useState(false);


    const handleNextButtonClick = (e)=>{
        document.getElementById('option0').style.backgroundColor = "grey";
        document.getElementById('option1').style.backgroundColor = "grey";
        document.getElementById('option2').style.backgroundColor = "grey";
        document.getElementById('option3').style.backgroundColor = "grey";

        const nextQuestion= currentQuestion+1;
         if(nextQuestion<quizData.length){
             setCurrentQuestion(nextQuestion);
         }else{
             setShowScore(true);
         }
    };

    const handlePreviousButtonClick=()=>{
        const previousQuestion=currentQuestion-1;
        if(previousQuestion>=quizData.length-3){
            setCurrentQuestion(previousQuestion);
        }
    }

    const handleAnswerButtonClick=(e,optionIndex)=>{
        /*for(let i=0; i<4;i++){

            if(i != optionIndex){
            document.getElementById(`option${i}`).style.backgroundColor = "grey";
            }
            } */
        //e.target.style.backgroundColor='white'
        if(e.target.innerHTML==quizData[currentQuestion].answer ){
            setScore(score+1);
            //e.target.style.backgroundColor='green'
            //e.target.setAttribute("disable",true);
        }else{
            //e.target.style.backgroundColor='red'
        }
        const nextQuestion= currentQuestion+1;
         if(nextQuestion<quizData.length){
             setCurrentQuestion(nextQuestion);
         }else{
             setShowScore(true);
         }
    }

    return(
        <div id='quizappsec'>

          <div>{showScore?  <div className='score-section'>You have answered {score} out of {quizData.length} questions correctly</div> : <div><div className='question-count'>
	            <span>Question {currentQuestion + 1}</span>/{quizData.length}
            </div>
          <div id='question'>{quizData[currentQuestion].question}</div>

          <div id='answerSection'>
            {
             quizData[currentQuestion].answerOptions.map((element,index)=>{
               return(
                   <li>
                     <button id={`option${index}`} disable={false} className='option-btn' onClick={(e)=>{
                          handleAnswerButtonClick(e,index);
                     }}  >{element.answerText}</button>
                   </li>

               )
           })
          }
          </div>

          </div>}</div>

        </div>



    );
}