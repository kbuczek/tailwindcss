import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';

export default function Home() {
  return (
    <>
      <Head>
        <title>Christopher Buczek Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between bg-red-400">
            <h1>chris buczek</h1>
            <ul>
              <li>
                <BsFillMoonStarsFill />
              </li>
              <li>
                <a href="#">Resume</a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </>
  );
}
