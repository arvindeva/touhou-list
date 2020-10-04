import sanity from '../lib/sanity';

const GET_GAMES = `*[_type == 'game'] | order(number asc) { 
  _id, title, slug, number
} 
`;

const GET_GAME_BY_SLUG = `*[_type == 'game' && slug.current == $slug] { 
  _id, title, slug, number,
  "imageUrl": cover.asset->url
} 
`;

export async function getAllGameSlugs() {
  const games = await sanity.fetch(GET_GAMES);
  const slugs = games.map((game) => game.slug.current);
  // Returns an array of objects consisting id params:
  // [{ params: { slug: ''} }, { params: { slug: ''} }]
  const paramsArray = slugs.map((slug) => {
    return {
      params: {
        slug,
      },
    };
  });
  return paramsArray;
}

export async function getSortedGames() {
  const games = await sanity.fetch(GET_GAMES);
  return games;
}

export async function getGameData(slug) {
  const game = await sanity.fetch(GET_GAME_BY_SLUG, { slug });
  return game[0];
}
