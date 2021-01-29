import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Webdev Next</title>
        <meta name='keywords' content='web ' />
      </Head>
      <h1>Welcome</h1>
    </div>
  );
}
