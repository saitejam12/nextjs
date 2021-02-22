import Head from 'next/head';

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Webdev Next</title>
        <meta name='keywords' content='web ' />
      </Head>
      <h1>Welcome</h1>
      {articles.map((art) => {
        return (
          <div key={art.id}>
            <h3>
              <span>{art.id}</span>&nbsp;
              {art.title}
            </h3>
            <p>{art.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
