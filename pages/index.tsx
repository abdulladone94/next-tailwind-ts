import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Movie Collection</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <h1>Movie Collection Home Page</h1>
        </section>
      </main>
    </div>
  );
};

export default Home;
