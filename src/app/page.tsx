import Link from "next/link";

const Home = () => {
  return (
    <main>
      <h1>Hello!</h1>
      <p>Howdy</p>

      <Link href="/heroes">Heroes</Link>
    </main>
  );
};

export default Home;
