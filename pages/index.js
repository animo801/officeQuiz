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
        <link rel="stylesheet" href="https://use.typekit.net/dyq4wvl.css"></link>
      </Head>


      <div>
        <h1 className={styles.heading}>The Hardest Office Quiz You'll Ever Take</h1>
        <button>

          <Link href="/quiz/one">Start Quiz</Link>
        </button>
      </div>
    </div>
  );
}
