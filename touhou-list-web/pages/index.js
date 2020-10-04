import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import { getSortedCharacters } from '../lib/characters';
import { getSortedGames } from '../lib/games';

export const getStaticProps = async () => {
  const characters = await getSortedCharacters();
  const games = await getSortedGames();
  return {
    props: { characters, games }, // will be passed to the page component as props
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
        <h3>Characters</h3>
        {props.characters.map((character) => (
          <div key={character._id}>
            <Link
              href={'/characters/[slug]'}
              as={`/characters/${character.slug.current}`}
            >
              <a>{character.name}</a>
            </Link>
          </div>
        ))}
        <h3>Official Games</h3>
        {props.games.map((game) => (
          <div key={game._id}>
            <Link href={'/games/[slug]'} as={`/games/${game.slug.current}`}>
              <a>{`Touhou ${game.number}: ${game.title}`}</a>
            </Link>
          </div>
        ))}
      </main>
      <footer></footer>
    </StyledHome>
  );
}
