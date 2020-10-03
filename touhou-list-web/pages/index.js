import Head from 'next/head';
import Link from 'next/link';

import { getSortedCharactersWithSlugs } from '../lib/characters';

export const getStaticProps = async () => {
  const sortedCharactersWithSlug = await getSortedCharactersWithSlugs();
  return {
    props: { sortedCharactersWithSlug }, // will be passed to the page component as props
  };
};

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Touhou List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {props.sortedCharactersWithSlug.map((character) => (
          <div key={character._id}>
            <Link
              href={'/characters/[slug]'}
              as={`/characters/${character.slug}`}
            >
              <a>{character.name}</a>
            </Link>
          </div>
        ))}
      </main>

      <footer></footer>
    </div>
  );
}
