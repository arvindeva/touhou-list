import Head from 'next/head';
import Link from 'next/link';

import { getAllCharacterSlugs, getCharacterData } from '../../lib/characters';

export const getStaticPaths = async () => {
  const paths = await getAllCharacterSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const character = await getCharacterData(params.slug);
  return {
    props: {
      slug: params.slug,
      character,
    },
  };
};

export default function Character({ character }) {
  return (
    <div>
      <h1>{character.name}</h1>
      <h3>Appearance</h3>
      {character.appearance ? (
        character.appearance.map((game) => {
          return <p key={game._id}>{game.title}</p>;
        })
      ) : (
        <div>Appearance not found.</div>
      )}
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  );
}
