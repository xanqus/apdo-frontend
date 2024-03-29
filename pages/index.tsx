import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../layouts/Header";
import styles from "../styles/Home.module.css";
import axios from "axios";

import { useEffect } from "react";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>main</div>
        <button
          onClick={async (e) => {
            e.preventDefault();
            const data = await axios.post("http://localhost:4000/api/login", {
              email: "test@test.com",
              password: "1234",
            });
            console.log(data);
          }}
        >
          {" "}
          test
        </button>
        <button
          onClick={async (e) => {
            e.preventDefault();
            const data = await axios.post(
              "http://localhost:3333/auth/atGuardTest"
            );
            console.log(data);
          }}
        >
          {" "}
          AtGuardTest
        </button>
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
