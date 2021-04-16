import {useState, useEffect} from 'react';
import './quiz.css'
import {quizData} from './quizData'
import { Button} from 'antd';
export default function Quiz(){


    // create currentQuestion as a statevariable
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const[showScore,setShowScore]= useState(false);
    const[score,setScore]= useState(0);

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
        for(let i=0; i<4;i++){

            if(i != optionIndex){
            document.getElementById(`option${i}`).style.backgroundColor = "grey";
            }
            }
        if(e.target.innerHTML==quizData[currentQuestion].answer){
            e.target.style.backgroundColor='green'
            setScore(score+1);
        }else{
          e.target.style.backgroundColor='red'
        }
    }

    return(
        <div id='quizappsec'>

          <div>{showScore?  <div className='score-section'>You scored {score} out of {quizData.length} questions</div> : <div><div className='question-count'>
	            <span>Question {currentQuestion + 1}</span>/{quizData.length}
            </div>
          <div id='question'>{quizData[currentQuestion].question}</div>

          <div id='answerSection'>
            {
             quizData[currentQuestion].answerOptions.map((element,index)=>{
               return(
                   <li>
                     <button id={`option${index}`} className='option-btn' onClick={(e)=>{
                          handleAnswerButtonClick(e,index);
                     }} style={{backgroundColor:'grey'}}>{element.answerText}</button>
                   </li>

               )
           })
          }
          </div>
          <br></br>
          <br></br>
          <span>
             <Button type="primary" onClick={()=>{
                 handlePreviousButtonClick()
             }}>Previous</Button>
             <Button type="primary"  onClick={(e)=>{
                         handleNextButtonClick(e)
                     }} >Next</Button>

          </span></div>}</div>

        </div>



    );
}