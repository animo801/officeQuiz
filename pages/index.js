import React, {useState} from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';



const levels = [
  {
    level: "One", 
    page: "Lets start this out easy."
  }
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
  // Add more questions
];

const imageStyle = {
  position: 'relative', 
  height: 'auto',
  width: '100%',
  maxHeight: '400px',

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
      </Head>


      <div className={styles.mainContainer}>
        
        
        {endOfQuiz && 
          <div>
            <h2 className={styles.heading_xl}>Question {currentQuestion + 1}</h2>
            <p className={styles.question}>{questions[currentQuestion].question}</p>
            <div className='motherFreaking'>
              <Image style={imageStyle} src={questions[currentQuestion].image} width={500} height={500}/>
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
        </>}
       


      </div>
    </div>
  );
}
