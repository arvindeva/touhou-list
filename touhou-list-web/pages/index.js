import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import { getSortedCharacters } from '../lib/characters';
import { getSortedGames } from '../lib/games';

import Heading from '../components/Heading';
import Section from '../components/Section';
import CharacterCard from '../components/Characters/Card';
import CharactersGrid from '../components/Characters/Grid';

export const getStaticProps = async () => {
  const characters = await getSortedCharacters();
  const games = await getSortedGames();
  return {
    props: { characters, games }, // will be passed to the page component as props
  };
};

const StyledHome = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.navy};
  color: white;
`;

export default function Home(props) {
  return (
    <StyledHome>
      <Head>
        <title>Touhou List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Section>
          <Heading>Characters</Heading>
          <CharactersGrid>
            {props.characters.map((character) => (
              <CharacterCard key={character._id} character={character} />
            ))}
          </CharactersGrid>
        </Section>
        <Section>
          <Heading>Official Games</Heading>

          {props.games.map((game) => (
            <div key={game._id}>
              <Link href={'/games/[slug]'} as={`/games/${game.slug.current}`}>
                <a>{`Touhou ${game.number}: ${game.title}`}</a>
              </Link>
            </div>
          ))}
        </Section>
      </main>
      <footer></footer>
    </StyledHome>
  );
}
