import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

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
    <>
      <Head>
        <title>{character.name}</title>
      </Head>
      <div>
        <h1>{character.name}</h1>
        <Image src={character.imageUrl} alt={character.name} />
        <h3>Appearance</h3>
        {character.appearances ? (
          character.appearances.map((appearance) => {
            return (
              <div key={appearance.game._id} style={{ marginBottom: '2rem' }}>
                <Image
                  src={appearance.game.cover.asset.url}
                  alt={appearance.game.title}
                  style={{ width: '150px' }}
                  width="350"
                  height="350"
                />
                <Link
                  href={'/games/[slug]'}
                  as={`/games/${appearance.game.slug.current}`}
                >
                  <a>
                    <h3>{appearance.game.title}</h3>
                  </a>
                </Link>
                <ul>
                  {appearance.as.map((role) => (
                    <p key={role}>{role}</p>
                  ))}
                </ul>
              </div>
            );
          })
        ) : (
          <div>Appearance not found.</div>
        )}
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </>
  );
}
