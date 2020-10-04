import sanity from '../lib/sanity';

const GET_CHARACTERS = `*[_type == 'character']{ 
  _id, name, slug,
  appearance[]->{title}
} 
`;

const GET_CHARACTER_BY_SLUG = `*[_type == 'character' && slug.current == $slug]{ 
  _id, name, slug,
  appearance[]->{_id, title}
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
  const sortedCharacters = characters
    .slice()
    .sort((a, b) => (a.name > b.name ? 1 : -1));
  return sortedCharacters;
}

export async function getCharacterData(slug) {
  const character = await sanity.fetch(GET_CHARACTER_BY_SLUG, { slug });
  return character[0];
}
