import React, {useState} from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion"



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
        <motion.h1 
          className={styles.heading}
          initial={{ y:8, opacity: 0,}}
          animate={{ y:0, opacity: 1}}
          transition={{ duration: .5 }}
          >
            The Hardest Office Quiz You'll Ever Take
        </motion.h1>
        <motion.p
          initial={{ y:8,opacity: 0,}}
          animate={{ y:0, opacity: 1}}
          transition={{ duration: .5, delay: .8,}}
        >
          This ain't your average BuzzFeed quiz.
        </motion.p>
        
        <motion.p
          initial={{ y:8,opacity: 0,}}
          animate={{ y:0, opacity: 1}}
          transition={{ duration: .5, delay: .85,}}
        >
          15 Levels, each one harder than the last. And you need to get 80% to move on. So far, no one has made it to level 15.
        </motion.p>
        <motion.p
          initial={{ y:8,opacity: 0,}}
          animate={{ y:0, opacity: 1}}
          transition={{ duration: .5, delay: .9,}}
        >
          Think you have what it takes? 
        </motion.p>

        <Link href="/quiz/one">
          <motion.button 
            className='button'
            initial={{ y:8,opacity: 0,}}
            animate={{ y:0, opacity: 1}}
            transition={{ duration: .5, delay: 2,}}
          >
            Start Quiz
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
