import React, {useState} from 'react';
import Head from 'next/head';
import styles from '../../styles/quiz/One.module.css';
import Link from 'next/link';
import Image from 'next/image';

const responses = [
  "You have probably never watched The Office", 
  "Getting one right is not that easy. ",
  "Getting two right... you are getting there"
]

const questions = [
  {
    question: 'Who is this?',
    options: ['Michael Scott', 'Dwight Schrute', 'Jim Halpert', 'Creed Braton'],
    answer: 'Michael Scott',
    image: '/images/michael.jpg',
  },
  {
    question: 'Who is this?',
    options: ['Michael Scott', 'Dwight Schrute', 'Jim Halpert', 'Creed Braton'],
    answer: 'Jim Halpert',
    image: '/images/jim.png',
  },
  {
    question: 'Who is this?',
    options: ['Michael Scott', 'Dwight Schrute', 'Jim Halpert', 'Creed Braton'],
    answer: 'Creed Braton',
    image: '/images/creed.jpg',
  },
  {
    question: 'Who is this?',
    options: ['Michael Scott', 'Dwight Schrute', 'Jim Halpert', 'Creed Braton'],
    answer: 'Dwight Schrute',
    image: '/images/dwight.avif',
  },
  {
    question: 'Who is this?',
    options: ['Michael Scott', 'Dwight Schrute', 'Jim Halpert', 'Creed Braton'],
    answer: 'Dwight Schrute',  },
  // Add more questions
];

const imageStyle = {
  position: 'relative', 
  height: 'auto',
  width: '100%',
  maxHeight: '400px',
  borderRadius: '16px'
}


export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0); 
  const [userResponses, setUserResponses] = useState([]);
  const [endOfQuiz, setEndOfQuiz] = useState(true);
  const [answers, setAnswers] = useState(false);
  const [numberCorrect, setNumberCorrect] = useState(0);

  const handleAnswer = (answer) => {
    console.log(questions[0].answer);

    console.log(answer);

    if(questions[currentQuestion].answer === answer) {
      console.log("Correct! You got it right!"); 
      setNumberCorrect(numberCorrect+1);
    } else {
      console.log("Don't be an idiot!")
    }

    setUserResponses([...userResponses, answer]); 
    if (currentQuestion < questions.length-1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setEndOfQuiz(false);
      setAnswers(true);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </Head>


      <div className={styles.mainContainer}>
        
        
        {endOfQuiz && 
          <div>
            <div className={styles.header_div}>
              <div className={styles.question_div}>
                <h2 className={styles.quesiton_label}>QUESTION</h2>
                <h2 className={styles.question_number}>#{currentQuestion + 1}</h2>
              </div> 

              <div>
                <p className={styles.question}>{questions[currentQuestion].question}</p>
              </div>
            </div>

            <div>
              {questions[currentQuestion].image ? 
              
              <Image style={imageStyle} src={questions[currentQuestion].image} width={500} height={500}/>
              : 
              
              <></>}
              
            </div>
            <div className={styles.questionList}>
              {questions[currentQuestion].options.map((option, index) => (
                <button className={styles.questionButtons} key={index} onClick={() => handleAnswer(option)}>{option}</button>
              ))}
            </div>
          </div>
        }
        
        {answers && <> 
          <h1>Here are your answers</h1>
          <h1>{numberCorrect}/{questions.length}</h1>
          <h1>{responses[numberCorrect]}</h1>
        </>}
       


      </div>
    </div>
  );
}
