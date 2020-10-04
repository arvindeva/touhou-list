import Head from 'next/head';
import Link from 'next/link';

import { getAllGameSlugs, getGameData } from '../../lib/games';
import urlFor from '../../utils/urlFor';

export const getStaticPaths = async () => {
  const paths = await getAllGameSlugs();
  console.log(paths);
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
      game,
    },
  };
};

export default function Game({ game }) {
  return (
    <div>
      {game.imageUrl && <img src={urlFor(game.imageUrl).width(500).url()} />}
      <h1>{game.title}</h1>
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  );
}
