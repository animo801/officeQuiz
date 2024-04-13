import React, {useState} from 'react';
import Head from 'next/head';
import styles from '../../styles/quiz/One.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Airtable from 'airtable';
import axios from 'axios';

const responses = [
  {
    line1: 'Have you even seen The Office?', 
    line2: 'You need to get 4 right on this to move on. Try it again.'
  },
  {
    line1: 'Have you even seen The Office?', 
    line2: 'You need to get 4 right on this to move on. Try it again.'
  },
  {
    line1: 'Have you even seen The Office?', 
    line2: 'You need to get 4 right on this to move on. Try it again.'
  },
  {
    line1: 'Not bad. Not great, but not bad.', 
    line2: 'Since you got 4 or more right, you can go to the next level. But it gets harder.'
  },
  {
    line1: 'Ok, you might know what you are talking about. ', 
    line2: 'Since you got 4 or more right, you can go to the next level. But it gets harder.'
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
  {
    question: 'Who is this?',
    options: ['Angela Martin', 'Pam Beesly', 'Phyllis Lapin', 'Kelly Kapoor'],
    answer: 'Angela Martin',  
    image: '/images/angela.webp',
  },
  {
    question: 'Who is this?',
    options: ['Angela Martin', 'Pam Beesly', 'Phyllis Lapin', 'Kelly Kapoor'],
    answer: 'Pam Beesly',  
    image: '/images/pam.jpg',
  },
  {
    question: 'Who is this?',
    options: ['Angela Martin', 'Pam Beesly', 'Phyllis Lapin', 'Kelly Kapoor'],
    answer: 'Phyllis Lapin',  
    image: '/images/phyllis.jpg',
  },
  {
    question: 'Who is this?',
    options: ['Angela Martin', 'Pam Beesly', 'Phyllis Lapin', 'Kelly Kapoor'],
    answer: 'Kelly Kapoor',  
    image: '/images/kelly.jpg',
  },
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
  const [quiz, setQuiz] = useState(false);
  const [answers, setAnswers] = useState(false);
  const [numberCorrect, setNumberCorrect] = useState(0);
  const [intro, setIntro] = useState(true);
  const [theEmail, setTheEmail] = useState("animo801@gmail.com");

  const handleAnswer = (answer) => {

    if(questions[currentQuestion].answer === answer) {
      setNumberCorrect(numberCorrect+1);
    } else {
    }

    setUserResponses([...userResponses, answer]); 
    if (currentQuestion < questions.length-1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuiz(false);
      setAnswers(true);
    }
  }

  const tryAgain = () => {
    setCurrentQuestion(0); 
    setNumberCorrect(0); 
    setQuiz(true);
    setAnswers(false);
  }

  const showQuiz = () => {
    setQuiz(true); 
    setIntro(false);
  }

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    const response = await fetch('/api/addToNotion', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({email: theEmail}),
    }); 
    const data = await response.json();
    console.log('Data submitted to Notion', data)
  }

  const changesBaby = (event) => {
    setTheEmail(event.target.value);
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
        
        {intro &&
          <div>
            <p>Level 1</p>
            <h1>Season One Episode One</h1>
            <p>The Pilot. The first episode. Most of us can agree the first season of The Office was... not the best. But how well do you know it? 10 questions coming your way.</p>
            <button onClick={()=> showQuiz()}className="button">Start Level 1</button>

              {/* Airtable form */}
              <form onSubmit={handleSubmit}>
                <label>
                  Email:
                  <input value={theEmail} type="email" onChange={changesBaby}/>
                </label>
                <button type="submit">Submit</button>
              </form>

          </div>
        }
        
        {quiz && 
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
              
                <Image style={imageStyle} src={questions[currentQuestion].image} width={500} height={500} alt='noneYa' priority={true}/>
              : 
                <></>
              }
              
            </div>
            <div className={styles.questionList}>
              {questions[currentQuestion].options.map((option, index) => (
                <button className={styles.questionButtons} key={index} onClick={() => handleAnswer(option)}>{option}</button>
              ))}
            </div>
          </div>
        }
        
        {answers && <> 
          {numberCorrect/questions.length > .8 ? 
          ( // You scored 4 or more
            <>
              <p className={styles.score_header}>Your score for Level 1:</p>
              <h1 className={styles.score_text}>{numberCorrect}/{questions.length}</h1>
              <p className={styles.response_text}>Ok... you might know something.</p>
              <p className={styles.response_text}>Since you got over 80% right you can go to the next level. But a warning... that was just a test. Its gonna get much harder.</p>

              <Link href="/quiz/two">
                <button className={styles.questionButtons} >
                Go to Level 2
                </button>
              </Link>

              
            </>
            
          )
          : 
          ( // You scored less than 4
            <>
              <p className={styles.score_header}>Your score for Level 1:</p>
              <h1 className={styles.score_text}>{numberCorrect}/{questions.length}</h1>
              <p className={styles.response_text}>Have you even seen the Office?</p>
              <p className={styles.response_text}>You need to score at least 80% to move on to the next level. Try again... or just watch the show!</p>
            
              <button className={styles.questionButtons} onClick={() => tryAgain()}>Try again</button>
            </>
          )}
          
        </>}
       


      </div>
    </div>
  );
}
