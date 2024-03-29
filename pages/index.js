import React, {useState} from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';



export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </Head>


      <div className={styles.mainThing}>
        <h1 className={styles.heading}>The Hardest Office Quiz You'll Ever Take</h1>
        <p>This ain't your average BuzzFeed quiz.</p>
        
        <p>15 Levels, each one harder than the last. And you need to get 80% to move on. So far, no one has made it to level 15.</p>
        <p>Think you have what it takes? </p>

        <button className='button'>
          <Link href="/quiz/one">Start Quiz</Link>
        </button>
      </div>
    </div>
  );
}
