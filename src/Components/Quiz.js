import {useState, useEffect} from 'react';
import './quiz.css'
export default function Quiz(){

    const quizData=[
        {
            index:'0',
            question:'What is the capital of United Kingdom?',
            answerOptions:[
                {answerText:'Slough',isCorrect:false},
                {answerText:'London',isCorrect:true},
                {answerText:'Southall',isCorrect:false},
                {answerText:'Birmingham',isCorrect:false}

            ],
            answer:'London'

        },
        {
            index:'1',
            question:'What is the capital of France?',
            answerOptions:[
                {answerText:'Slough',isCorrect:false},
                {answerText:'Paris',isCorrect:true},
                {answerText:'Southall',isCorrect:false},
                {answerText:'Birmingham',isCorrect:false}

            ],
            answer:'Paris'
        },
        {

            index:'2',
            question:'What is the capital of India?',
            answerOptions:[
                {answerText:'Slough',isCorrect:false},
                {answerText:'New Delhi',isCorrect:true},
                {answerText:'Southall',isCorrect:false},
                {answerText:'Birmingham',isCorrect:false}

            ],
            answer:'New Delhi'
        }
    ];
    // create currentQuestion as a statevariable
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const[showScore,setShowScore]= useState(0)

    const handleAnswerButtonClick = (e)=>{
        if(e.target.innerHTML==quizData[currentQuestion].answer){
            e.target.style.backgroundColor='green'
            setShowScore(showScore+1);
        }else{

        }


        const nextQuestion= currentQuestion+1;
         if(nextQuestion<quizData.length){
             setCurrentQuestion(nextQuestion);
         }else{
             alert('Quiz is ended')
         }
    };


    return(
        <div id='quizappsec'>
          <div id='question'>{quizData[currentQuestion].question}</div>

          <div id='answerSection'>
            {
             quizData[currentQuestion].answerOptions.map((element)=>{
               return(
                   <li>
                     <button onClick={(e)=>{
                         handleAnswerButtonClick(e)
                     }} style={{backgroundColor:'grey'}}>{element.answerText}</button>
                   </li>

               )
           })
          }
          </div>
          <br></br>
          <br></br>

          <div>Your Score is {showScore}</div>

        </div>



    );
}