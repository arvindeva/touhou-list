import Head from 'next/head';

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
  console.log(character);
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
      <h1>Name: {character.name}</h1>
      <p>ID: {character._id}</p>
      <h3>Appeared In:</h3>
      {character.appearance.map((game) => {
        return <p key={game._id}>{game.title}</p>;
      })}
      {console.log(character)}
    </div>
  );
}
