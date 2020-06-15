import Head from "next/head";
import { Directory } from "../components/Directory";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Uber Work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Directory></Directory>
      </main>
    </div>
  );
}
