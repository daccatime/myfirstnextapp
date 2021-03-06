import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to John's  <a href="https://nextjs.org">Next.js Site !</a>
        </h1>

        

       
      </main>

      <footer className={styles.footer}>
        <a >
         powered by John
        </a>
      </footer>
    </div>
  )
}
