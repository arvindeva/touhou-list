import Head from 'next/head';
import Link from 'next/link';

import { getAllGameSlugs, getGameData } from '../../lib/games';
import urlFor from '../../utils/urlFor';

export const getStaticPaths = async () => {
  const paths = await getAllGameSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const game = await getGameData(params.slug);
  return {
    props: {
      slug: params.slug,
      game: game,
    },
  };
};

export default function Game({ game, newGame }) {
  const relatedCharacters = game.relatedCharacters;

  const selectedAppearances = (appearances) => {
    return appearances?.find(
      (appearance) => appearance.game.title === game.title
    );
  };
  const renderCharacterRoles = (appearances) => {
    return selectedAppearances(appearances)?.as.map((role) => {
      return <p key={role}>{role}</p>;
    });
  };

  const renderCharacters = relatedCharacters.map((character) => {
    return (
      <div key={character._id}>
        <Link
          href={'/characters/[slug]'}
          as={`/characters/${character.slug.current}`}
        >
          <a>
            <h3 key={character.name}>{character.name}</h3>
          </a>
        </Link>
        {renderCharacterRoles(character.appearances)}
      </div>
    );
  });

  return (
    <>
      <Head>
        <title>{game.title}</title>
      </Head>
      <div>
        {game.imageUrl && <img src={urlFor(game.imageUrl).width(500).url()} />}
        <h1>{game.title}</h1>
        <h1>Characters:</h1>
        {renderCharacters}
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </>
  );
}
