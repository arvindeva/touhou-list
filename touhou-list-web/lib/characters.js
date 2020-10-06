import sanity from '../lib/sanity';

const GET_CHARACTERS = `*[_type == 'character'] | order(name asc) { 
  _id, name, slug,
  appearance[]->{title},
  image
} 
`;

const GET_CHARACTER_BY_SLUG = `*[_type == 'character' && slug.current == $slug]{ 
  _id, name, slug,
  appearance[]->{_id, title},
  "imageUrl": image.asset->url
} 
`;

export async function getAllCharacterSlugs() {
  const characters = await sanity.fetch(GET_CHARACTERS);
  const slugs = characters.map((character) => character.slug.current);
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

export async function getSortedCharacters() {
  const characters = await sanity.fetch(GET_CHARACTERS);
  return characters;
}

export async function getCharacterData(slug) {
  const character = await sanity.fetch(GET_CHARACTER_BY_SLUG, { slug });
  return character[0];
}
