import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import { getSortedCharacters } from '../lib/characters';

export const getStaticProps = async () => {
  const sortedCharacters = await getSortedCharacters();
  return {
    props: { sortedCharacters }, // will be passed to the page component as props
  };
};

const StyledHome = styled.div``;

export default function Home(props) {
  return (
    <StyledHome>
      <Head>
        <title>Touhou List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {props.sortedCharacters.map((character) => (
          <div key={character._id}>
            <Link
              href={'/characters/[slug]'}
              as={`/characters/${character.slug.current}`}
            >
              <a>{character.name}</a>
            </Link>
          </div>
        ))}
      </main>
      <footer></footer>
    </StyledHome>
  );
}
